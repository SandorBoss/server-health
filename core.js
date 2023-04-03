const Storage = require('./storage');
const storage = new Storage();

module.exports = class Core {

    getDataWithQueryString(queryString) {
        const resultObject = storage.queryInFileSystem(queryString);
        return this.parseAnswerToJson(resultObject);
    }

    writeLogEntry(queryString, filePath) {
        storage.writeRequestLog(queryString, filePath);
    }

    getLogData(filePath) {
        const logContent = storage.getLogContent(filePath);
        return JSON.stringify(logContent);
    }

    parseAnswerToJson(answer) {
        return JSON.stringify(answer);
    }
}
