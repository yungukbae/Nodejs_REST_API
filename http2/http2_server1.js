const https = require('https');
const fs = require('fs');

https.createServer({
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key'),
    ca: [
        fs.readFileSync('./localhost.crt'),
        fs.readFileSync('./localhost.key'),
    ],
},  (req,res) => {
    res.write('<h1>Certification Node</h1>');
    res.end('<p>https</p>');
}).listen(443, () => {
    console.log('443번 포트 대기중');
});