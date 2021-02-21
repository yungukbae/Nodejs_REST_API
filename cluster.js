const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    //CPU갯수만큼 워커 생성
    for(let i = 0; i< numCPUs; i+=1){
        cluster.fork();
    }

    //워커가 종료되었을때

    cluster.on('exit',(worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    });
}else{
    //워커들이 포트에서 대기

    http.createServer((req,res) => {
        res.write('<h1>Success</h1>');
        res.end('<p>server...</p>');
    }).listen(8085);
    console.log(`${process.pid}번 워커 실행`);
}