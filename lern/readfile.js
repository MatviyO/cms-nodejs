const fs = require('fs');

fs.readFile('./data/input.txt', 'utf8', (err, text) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(text);
});

// as buffer

fs.readFile('./data/image.png', (err, buf) => {
    if (err) return console.error(err);
    console.log(buf.length);
});

//folder
fs.readdir('./', (err, names) => {
    if (err) return console.error(err);
    console.log(names);
});

//as stream
const s = fs.createReadStream('./big.log', { encoding: 'utf8' });

s.on('data', chunk => process.stdout.write(chunk));
s.on('end', () => console.log('\nDONE'));
s.on('error', err => console.error(err));
