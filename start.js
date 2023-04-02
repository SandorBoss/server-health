const http = require('http');
const url = require('url');
const Core = require('./core');
const core = new Core();

const port = 8080;
const host = 'localhost';

const server = http.createServer(async (request, response) => {
    const urlQueryString = url.parse(request.url).query;
    if (urlQueryString) {
        response.end(core.getDataWithQueryString(urlQueryString));
    };
});

server.listen(port, host);
