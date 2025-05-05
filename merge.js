const fs = require('fs');
const path = require('path');

// Recursively delete a file or directory
const deleteRecursive = (targetPath) => {
  if (!fs.existsSync(targetPath)) return;
  const stat = fs.statSync(targetPath);
  if (stat.isDirectory()) {
    // delete children first
    for (const child of fs.readdirSync(targetPath)) {
      deleteRecursive(path.join(targetPath, child));
    }
    fs.rmdirSync(targetPath);
  } else {
    fs.unlinkSync(targetPath);
  }
};

// Cleanup function: remove everything except index.html
const cleanupDir = (dirPath) => {
  const entries = fs.readdirSync(dirPath);
  for (const entry of entries) {
    if (entry === 'index.html') continue;
    deleteRecursive(path.join(dirPath, entry));
  }
  console.log('Cleanup complete: all files except index.html removed.');
};

const readFile = (filePath) =>
  new Promise((resolve, reject) =>
    fs.readFile(filePath, 'utf-8', (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );

const injectFilesIntoHtml = async (dirPath) => {
  try {
    const indexPath = path.join(dirPath, 'index.html');
    const jsDirPath = path.join(dirPath, 'static/js');
    const cssDirPath = path.join(dirPath, 'static/css');

    if (!fs.existsSync(indexPath)) {
      throw new Error('index.html is missing');
    }

    const jsFiles = fs.existsSync(jsDirPath)
      ? fs.readdirSync(jsDirPath)
      : [];
    const cssFiles = fs.existsSync(cssDirPath)
      ? fs.readdirSync(cssDirPath)
      : [];

    const jsFile = jsFiles.find(f => f.endsWith('.js'));
    const cssFile = cssFiles.find(f => f.endsWith('.css'));

    if (!jsFile) throw new Error('JavaScript file is missing in static/js/');
    if (!cssFile) throw new Error('CSS file is missing in static/css/');

    const cssContent = await readFile(path.join(cssDirPath, cssFile));
    const jsContent = await readFile(path.join(jsDirPath, jsFile));
    let htmlContent = await readFile(indexPath);

    // Inject CSS after <body> tag
    htmlContent = htmlContent.replace(
      /<body([^>]*)>/,
      `<body$1>\n  <style>\n${cssContent}\n  </style>`
    );

    // Inject JS before </body>
    htmlContent = htmlContent.replace(
      /<\/body>/,
      `  <script>\n${jsContent}\n  </script>\n</body>`
    );

    fs.writeFileSync(indexPath, htmlContent, 'utf-8');
    console.log('Successfully injected the CSS and JS into index.html');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const main = () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node inject.js <directory> [--cleanup]');
    process.exit(1);
  }

  const dirPath = args[0];
  const doCleanup = args.includes('--cleanup');

  if (!fs.existsSync(dirPath)) {
    console.error(`Directory "${dirPath}" does not exist.`);
    process.exit(1);
  }

  if (doCleanup) {
    cleanupDir(dirPath);
    process.exit(0);
  }

  injectFilesIntoHtml(dirPath);
};

main();
