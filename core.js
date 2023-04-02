const Storage = require('./storage');
const storage = new Storage();

module.exports = class Core {
    
    query = 'port=8080';
    inputPort = '';
    outputJson = {
        port: 0
    };

    getDataWithQery() {
        
    }

    setPort(port) {
        this.inputPort = port;
    }

    updateServerInfo() {
        this.outputJson.port = +this.inputPort;
    }
}
