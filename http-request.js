const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, (res) => {
    res.setEncoding('utf8');

    if (res.statusCode !== 200) {
        console.error('Status:', res.statusCode);
        res.resume(); // дочитати/скинути дані, щоб звільнити сокет
        return;
    }

    let body = '';
    res.on('data', (chunk) => { body += chunk; });

    res.on('end', () => {
        fs.writeFile('data.json', body, 'utf8', (err) => {
            if (err) return console.error(err);
            console.log('created');
        });
    });

    res.on('error', (err) => console.error('Response error:', err));
}).on('error', (err) => console.error('Request error:', err));
