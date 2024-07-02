const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    const pathname = url.parse(req.url).pathname;
    
    if (pathname == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello World/n</h1>');
    }else if (pathname == '/api') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/JSON');
        res.end('hello there');
    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>Page Not Found</h2>');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})