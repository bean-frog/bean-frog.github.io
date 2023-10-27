
//matrix
var c = document.getElementById('c');
var cxt = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;


var chars = "<>*#$!^&ツぅぁづぬあブヷスろむ";
chars = chars.split("");

var font_size =10;
var columns = c.width/font_size; 

var drops = [];

for(var x=0;x<columns;x++){
  drops[x]=1;
}

function draw(){
  cxt.fillStyle="rgba(0,0,0,0.05)";
  cxt.fillRect(0,0,c.width,c.height);
  const colors = [
    "#0ea5e9",
    "#0ea5e9",
    "#ffffff"
  ]
  let random = Math.floor(Math.random() * colors.length)

  cxt.fillStyle = colors[random];
  cxt.font = font_size+'px arial';
  for(var i=0;i<drops.length;i++){
    var text = chars[Math.floor(Math.random()*chars.length)];
    cxt.fillText(text,i*font_size,drops[i]*font_size);
    
    if(drops[i]*font_size>c.height && Math.random() >0.975)
      drops[i]=0;
    
    //increment y coordinate
    drops[i]++;
}
}
setInterval(draw,50);
