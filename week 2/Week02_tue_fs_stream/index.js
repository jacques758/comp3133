const fs = require('fs');
const path = require('path');

// Define the path to the file
const filePath = path.join(__dirname, 'example.txt');

console.log('---start---');
// read asynchronously
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
} catch (err) {
    console.error('Error reading file:', err);
    }
console.log(data);


// read asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

console.log('---end---');

