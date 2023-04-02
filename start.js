module.exports = class Start {
    
    inputPort = '';
    outputJson = {
        port: 0
    };

    setPort(port) {
        this.inputPort = port;
    }

    updateServerInfo() {
        this.outputJson.port = +this.inputPort;
    }
}
