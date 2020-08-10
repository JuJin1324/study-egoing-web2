let http = require('http');
let fs = require('fs');
let url = require('url');
let app = http.createServer((req, res) => {
    let _url = req.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        if (queryData['id'] === undefined) {
            fs.readdir('./data', (err, files) => {
                let title = 'Welcome';
                let description = 'Hello, Node.js';
                let list = '<ul>'
                for (let i = 0; i < files.length; i++) {
                    list += `<li><a href="/?id=${files[i]}">${files[i]}</a>`
                }
                list += '</ul>'
                let template = `
                <!doctype html>
<html>
<head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
</head>
<body>
<h1><a href="/">WEB</a></h1>
${list}
<h2>${title}</h2>
<p style="margin-top:45px;">${description}</p>
</body>
</html>
            `;
                res.writeHead(200);
                res.end(template);
            });
        } else {
            fs.readdir('./data', (err, files) => {
                fs.readFile(`data/${queryData['id']}`, 'utf8', (err, description) => {
                    let title = queryData['id']
                    let list = '<ul>'
                    for (let i = 0; i < files.length; i++) {
                        list += `<li><a href="/?id=${files[i]}">${files[i]}</a>`
                    }
                    list += '</ul>'
                    let template = `
                <!doctype html>
<html>
<head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
</head>
<body>
<h1><a href="/">WEB</a></h1>
${list}
<h2>${title}</h2>
<p style="margin-top:45px;">${description}</p>
</body>
</html>
                `;
                    res.writeHead(200);
                    res.end(template);
                });
            });
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});


app.listen(3000);