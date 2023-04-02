const http = require('http');
const url = require('url');

const responseObject = {
    port: '8080',
    cpuUsage: '65%',
    freeMemory: '80gb'
}

const server = http.createServer((request, response) => {
    let queryObject = url.parse(request.url);
    response.end(queryObject.query);
    
    /*let responseJson = JSON.stringify(responseObject);
    if (request.url === '/') response.end(responseJson);
    if (request.url === '/api') {
        let urlQueryObject = url.parse(request.url, true);
        response.end('fuck off!');
        console.log(urlQueryObject);
    }*/
});

server.listen(8080, 'localhost', () => {});
