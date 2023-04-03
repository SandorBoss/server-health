const http = require('http');
const url = require('url');
const Core = require('./core');
const core = new Core();

const port = 8080;
const host = 'localhost';
const logPath = './request-log/request-log.txt';

const server = http.createServer(async (request, response) => {
    const urlQueryString = url.parse(request.url).query;
    core.writeLogEntry(urlQueryString, logPath);
    if (urlQueryString) {
        const healthData = core.getDataWithQueryString(urlQueryString);
        const logData = core.getLogData('./request-log/request-log.txt');
        response.end(healthData + '.' + logData);
    };
});

server.listen(port, host);
