const fileSystem = require('fs');

module.exports = class Storage {

    portFromCore = '';

    queryInFileSystem(queryString) {
        const portToQuery = this.transformQueryStringToPortNumber(
            queryString
        );
        const plainFileContent = this.getFileContent(portToQuery);
        const queryAnswer = this.createObjectFromQueryResult(
            portToQuery,
            plainFileContent
        );
        /*let portToQuery = this.parsePortToString();
        let plainFileContent = this.getFileContent(portToQuery);
        let queryAnswer = this.parseAnswerToJson(
            portToQuery,
            plainFileContent
        );*/

        return queryAnswer;
    }
    
    transformQueryStringToPortNumber(queryString) {
        return queryString.replace('port=', '');
    }

    createObjectFromQueryResult(portString, fileContent) {
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
