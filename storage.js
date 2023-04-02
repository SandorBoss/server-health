const fileSystem = require('fs');

module.exports = class Storage {

    queryInFileSystem(queryString) {
        const portToQuery = this.transformQueryStringToPortNumber(
            queryString
        );
        const plainFileContent = this.getFileContent(portToQuery);
        const queryAnswer = this.createObjectFromQueryResult(
            portToQuery,
            plainFileContent
        );

        return queryAnswer;
    }
    
    transformQueryStringToPortNumber(queryString) {
        return queryString.replace('port=', '');
    }

    createObjectFromQueryResult(portString, fileContent) {
        const arrayFromFileContent = fileContent.split('\n');
        return {
            port: portString,
            cpuUsage: arrayFromFileContent[0],
            freeMemory: arrayFromFileContent[1]
        }
    }
    
    getFileContent(portString) {
        const fileContent = fileSystem.readFileSync(
            `./server-infos/${portString}.txt`,
            'utf-8'
        );

        return fileContent;
    }
}
