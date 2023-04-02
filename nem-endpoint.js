const http = require('http');

var someData;

function setSomeData(input) {
    someData = input;
    console.log(someData);
}

const server = http.createServer((request, response) => {
    setSomeData(response.on('end', () => {setSomeData('1234')}));
});

server.listen(9090, 'localhost', () => {
    console.log('server started');
});