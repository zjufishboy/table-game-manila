const fs = require('fs');
const path = require('path');

const dirNames = fs.readdirSync('.');

const removeDir = dirName => {
  if (dirNames.includes(dirName)) {
    const pathOfTarget = path.resolve(__dirname, '../' + dirName);
    fs.rmSync(pathOfTarget, { recursive: true });
    console.log('[clean]', dirName + ' has been deleted');
  }
};

['dist', 'node_modules'].forEach(removeDir);
