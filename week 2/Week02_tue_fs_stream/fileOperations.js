const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'output.txt');

// Create new Directory
const dirPath = path.join(__dirname, 'data');
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
    console.log('Directory created:', dirPath);
} else {
    console.log('Directory already exists:', dirPath);
}

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('Error retrieving file stats:', err);
        return;
    }
    console.log('File Size:', stats.size, 'bytes');
    console.log('File Type:', stats.isFile ? 'File' : 'Directory');
});
