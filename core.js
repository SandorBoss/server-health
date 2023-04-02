const Storage = require('./storage');
const storage = new Storage();

module.exports = class Core {

    getDataWithQueryString(queryString) {
        const resultObject = storage.queryInFileSystem(queryString);
        return this.parseAnswerToJson(resultObject);
    }

    parseAnswerToJson(answer) {
        return JSON.stringify(answer);
    }
}
