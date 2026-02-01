const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        fs.readFile('./global.html', 'utf-8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }

})

http.listen(9111)
