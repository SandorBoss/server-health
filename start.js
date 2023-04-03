/*
 * A szerver felállításáért, valamint a kérések és
 * válaszok irányításáért felelős fájl.
 * Külön osztályként nem hoztam létre,
 * TDD-ben nem követtem a kód változásait
 */

const http = require('http');
const url = require('url');
const Core = require('./core');
const core = new Core();

const port = 8080;
const host = 'localhost';
const logPath = './request-log/request-log.txt';

const server = http.createServer(async (request, response) => {
    
    // itt kapjuk el a query stringet
    // (pl. /?port=8080)
    const urlQueryString = url.parse(request.url).query;
    
    // a kiküldött kérés eredményének a lelogolását innen indítjuk
    core.writeLogEntry(urlQueryString, logPath);
    if (urlQueryString) {
        const healthData = core.getDataWithQueryString(urlQueryString);
        const logData = core.getLogData('./request-log/request-log.txt');
        
        // az el nem készült ui-nak itt adjuk át a lekérdezett adatokat
        response.end(healthData + '.' + logData);
    };
});

// az alkalmazás a localhost:8080-on hallgat,
// a gyökér url-hez fűzhető fel az url query
// (jelenleg: "?port=8080" vagy "?port=8082")
server.listen(port, host);
