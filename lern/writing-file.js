const fs = require('fs');

fs.writeFile('./data/out.txt', 'Hello\n', 'utf8', (err) => {
    if (err) return console.error(err);
    console.log('written');
});

fs.appendFile('./data/out.txt', 'Next line\n', 'utf8', (err) => {
    if (err) return console.error(err);
    console.log('appended');
});


// fs.mkdir - create folder
