import Delaunator from "https://cdn.skypack.dev/delaunator@5.0.0";

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const contentDiv = document.getElementById("content");
const rightDivs = document.getElementsByClassName("box-right");


// Make sure the canvas stays at the correct size
let resetSize = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (canvas.width > 500) {
    contentDiv.style = "";
    for (let i = 0; i < rightDivs.length; rightDivs[i].style = "", i++);
    return;
  }
  contentDiv.style = "grid-template-columns:100vw;";
  for (
    let i = 0;
    i < rightDivs.length;
    rightDivs[i].style = "grid-column:1/1;", i++
  );
};
resetSize();
window.addEventListener("resize", resetSize);

// Generate the points for delaunator
let pointCount = 100;
let points = Array.from({ length: pointCount }, () => [
  Math.random() * 1.2 - 0.1,
  Math.random() * 1.2 - 0.1,
]);
// Borders, don't move
points.push(
  ...[
    [-0.2, -0.2],
    [0.5, -0.2],
    [1.2, -0.2],
    [-0.2, 1.2],
    [0.5, 1.2],
    [1.2, 1.2],
  ]
);

// Generate array of velocities for each point to have
let velocities = Array.from({ length: pointCount }, () => [
  (1 - Math.random() * 2) * 0.001,
  (1 - Math.random() * 2) * 0.001 * (canvas.width / canvas.height),
]);

// Delaunator helper functions. Thanks https://mapbox.github.io/delaunator/!
// They aren't commented because I barely understand them myself lol
let edgesOfTriangle = function (t) {
  return [3 * t, 3 * t + 1, 3 * t + 2];
};

let pointsOfTriangle = function (delaunay, t) {
  return edgesOfTriangle(t).map((e) => delaunay.triangles[e]);
};

function triangleCenter(points, delaunay, t) {
  const vertices = pointsOfTriangle(delaunay, t).map((p) => points[p]);
  return circumcenter(vertices[0], vertices[1], vertices[2]);
}

function nextHalfedge(e) {
  return e % 3 === 2 ? e - 2 : e + 1;
}

function triangleOfEdge(e) {
  return Math.floor(e / 3);
}

function circumcenter(a, b, c) {
  const ad = a[0] * a[0] + a[1] * a[1];
  const bd = b[0] * b[0] + b[1] * b[1];
  const cd = c[0] * c[0] + c[1] * c[1];
  const D =
    2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  return [
    (1 / D) * (ad * (b[1] - c[1]) + bd * (c[1] - a[1]) + cd * (a[1] - b[1])),
    (1 / D) * (ad * (c[0] - b[0]) + bd * (a[0] - c[0]) + cd * (b[0] - a[0])),
  ];
}

function edgesAroundPoint(delaunay, start) {
  const result = [];
  let incoming = start;
  do {
    result.push(incoming);
    const outgoing = nextHalfedge(incoming);
    incoming = delaunay.halfedges[outgoing];
  } while (incoming !== -1 && incoming !== start);
  return result;
}

function forEachVoronoiCell(points, delaunay, callback) {
  const seen = new Set(); // of point ids
  for (let e = 0; e < delaunay.triangles.length; e++) {
    const p = delaunay.triangles[nextHalfedge(e)];
    if (seen.has(p)) continue;
    seen.add(p);
    const edges = edgesAroundPoint(delaunay, e);
    const triangles = edges.map(triangleOfEdge);
    const vertices = triangles.map((t) => triangleCenter(points, delaunay, t));
    callback(p, vertices);
  }
}
// My code begins again!

// Colors, c0 is top and c1 is bottom
let c0 = [0x2d, 0x2f, 0x36];
let c1 = [0x63, 0x69, 0x82];

// Just something for ppl to call in the console
globalThis.changeColor = (a, b) => {
  c0 = a;
  c1 = b;
};

let applyVelocities = function (timeD) {
  points.forEach((point, i) => {
    // Apply velocities to the points, if they exist
    if (!velocities[i]) return;
    point[0] += velocities[i][0] * (timeD / tFps);
    point[1] += velocities[i][1] * (timeD / tFps);
    point[0] = point[0] + (0.1 % 1.2) - 0.1;
    point[1] = point[1] + (0.1 % 1.2) - 0.1;
    // Make sure the points stay within bounds! TODO: This could be refactored
    while (point[0] < -0.1) point[0]++;
    while (point[1] < -0.1) point[1]++;
    while (point[0] > 1.1) point[0]--;
    while (point[1] > 1.1) point[1]--;
  });
};

let eachCell = function (_d, points) {
  let y = points[0][1];
  ctx.beginPath();
  ctx.moveTo(points[0][0] * canvas.width, points[0][1] * canvas.height);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0] * canvas.width, points[i][1] * canvas.height);
    y += points[i][1];
  }
  ctx.lineTo(points[0][0] * canvas.width, points[0][1] * canvas.height);
  ctx.closePath();
  // Get average Y position of the points
  y /= points.length;
  if (y > 1) y = 1;
  if (y < 0) y = 0;
  // Interpolate between the two colors based on average Y
  let r = (1 - y) * c0[0] + y * c1[0];
  let g = (1 - y) * c0[1] + y * c1[1];
  let b = (1 - y) * c0[2] + y * c1[2];
  ctx.fillStyle = `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`;
  ctx.strokeStyle = ctx.fillStyle;
  ctx.fill();
  ctx.stroke();
};

// Get 1d array for delaunator
let timeP = Date.now();
const tFps = 1000 / 60;
let loop = function () {
  let timeD = Date.now() - timeP;
  timeP = Date.now();
  applyVelocities(timeD);
  let points1d = [];
  points.forEach((point) => points1d.push(...point));
  let delaunator = new Delaunator(points1d);
  // Clear window
  ctx.fillStyle = "#2d2f36";
  ctx.strokeStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Draw the cells
  forEachVoronoiCell(points, delaunator, eachCell);
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);