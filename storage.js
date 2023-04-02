const fileSystem = require('fs');

module.exports = class Storage {

    portFromCore = {
        port : 8080
    };

    portToQuery = this.portFromCore.port.toString();

    getFileContent(portString) {
        let fileContent = fileSystem.readFileSync(
            `./server-infos/${portString}.txt`,
            'utf-8'
        );

        return fileContent;
    }
}
