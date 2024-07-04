import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end(`hello server,你好主機, ${process.argv[2]}`)
});

server.listen(9000, () => {
    console.log("server is running @ http://localhost:9000");
})