const http = require('http');
const url = require('url');

const port = 8080;
const host = 'localhost';

const server = http.createServer((request, response) => {
    response.end('orly? kthxby');
});

server.listen(port, host);
