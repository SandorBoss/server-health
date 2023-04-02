const Storage = require('./storage');
const storage = new Storage();

module.exports = class Core {

    getDataWithQueryString(queryString) {
        return storage.queryInFileSystem(queryString);
    }
}
