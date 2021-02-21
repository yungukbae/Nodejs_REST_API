const { resolveSoa } = require('dns');
const http = require('http');

http.createServer((req,res) =>{
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello</p>');
}).listen(8080, () =>{
    console.log('8080port is on');
});