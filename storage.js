const fileSystem = require('fs');

module.exports = class Storage {

    portFromCore = {
        port : 8080
    };

    portToQuery = this.portFromCore.port.toString();

    queryInFileSystem() {
        let portToQuery = this.parsePortToString();
        let plainFileContent = this.getFileContent(portToQuery);
        let queryAnswer = this.parseAnswerToJson(
            portToQuery,
            plainFileContent
        );

        return queryAnswer;
    }
    
    parsePortToString() {
        return this.portFromCore.port.toString();
    }

    parseAnswerToJson(portString, fileContent) {
        let arrayFromFileContent = fileContent.split('\n');
        return {
            port: portString,
            cpuUsage: arrayFromFileContent[0],
            freeMemory: arrayFromFileContent[1]
        }
    }
    
    getFileContent(portString) {
        let fileContent = fileSystem.readFileSync(
            `./server-infos/${portString}.txt`,
            'utf-8'
        );

        return fileContent;
    }
}
