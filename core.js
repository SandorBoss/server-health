/*
 * kvázi-interaktorként viselkedő osztály
 */

const Storage = require('./storage');
const storage = new Storage();

module.exports = class Core {

    // az url query-vel fordulunk a storage-hez
    // és json-né alakított választ kapunk vissza
    getDataWithQueryString(queryString) {
        const resultObject = storage.queryInFileSystem(queryString);
        return this.parseAnswerToJson(resultObject);
    }

    // a lekérdezés logoláshoz szükséges információit
    // továbbítjuk a storage felé
    writeLogEntry(queryString, filePath) {
        storage.writeRequestLog(queryString, filePath);
    }

    // lekérdezzük a storage-tól a lelogolt kéréseket
    getLogData(filePath) {
        const logContent = storage.getLogContent(filePath);
        return JSON.stringify(logContent);
    }

    // a storage válaszát json-né alakítjuk
    // (ezt éppen használhattam volna a getLogData()-ban is :\)
    parseAnswerToJson(answer) {
        return JSON.stringify(answer);
    }
}
