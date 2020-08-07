let http = require('http');
let fs = require('fs');
let url = require('url');
let app = http.createServer((req, res) => {
    let _url = req.url;
    let queryData = url.parse(_url, true).query;
    let title = queryData['id']
    if (_url === '/') {
        title = 'Welcome';
    }
    if (_url === '/favicon.ico') {
        return res.writeHead(404);
    }
    res.writeHead(200);
    fs.readFile(`data/${queryData['id']}`, 'utf8', (err, description) => {
        let template = `
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ol>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p style="margin-top:45px;">${description}</p>
</body>
</html>
    `;
        res.end(template);
    });
});


app.listen(3000);