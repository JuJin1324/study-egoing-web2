let http = require('http');
let fs = require('fs');
let app = http.createServer((req, res) => {
    let url = req.url;
    if (url === '/') {
        url = '/index.html';
    }
    if (url === '/favicon.ico') {
        return res.writeHead(404);
    }
    // Template Literal 적용
    console.log(`__dirname: ${__dirname}`);
    console.log('__dirname: ' + __dirname);
    console.log('__dirname:', __dirname);


    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);