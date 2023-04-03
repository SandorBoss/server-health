const fileSystem = require('fs');

module.exports = class Storage {

    queryInFileSystem(queryString) {
        const portToQuery = this.transformQueryStringToPortNumber(
            queryString
        );
        const plainFileContent = this.getInfoFileContent(portToQuery);
        const queryAnswer = this.createObjectFromQueryResult(
            portToQuery,
            plainFileContent
        );

        return queryAnswer;
    }
    
    transformQueryStringToPortNumber(queryString) {
        return queryString.replace('port=', '');
    }

    transformLogDataToArray(logData) {
        return logData.split('\n');
    }

    createObjectFromQueryResult(portString, fileContent) {
        const arrayFromFileContent = fileContent.split('\n');
        return {
            port: portString,
            cpuUsage: arrayFromFileContent[0],
            freeMemory: arrayFromFileContent[1]
        }
    }
    
    getInfoFileContent(portString) {
        const fileContent = fileSystem.readFileSync(
            `./server-infos/${portString}.txt`,
            'utf8'
        );

        return fileContent;
    }

    getLogContent(filePath) {
        const plainLogContent = fileSystem.readFileSync(
            filePath,
            'utf8'
        );
        return this.transformLogDataToArray(plainLogContent); 
    }

    replaceLineBreaksWithSpaces(stringToProcess) {
        return stringToProcess.replace(/(?:\n)/g, ' ');
    }

    writeRequestLog(queryString, filePath) {
        if (queryString) {
            const portString = this.transformQueryStringToPortNumber(
                queryString
            );
            const infoContent = this.getInfoFileContent(portString);
            const lineToWright = 
                `${this.getActualTimestamp()} ` +
                `${portString} ` +
                `${this.replaceLineBreaksWithSpaces(infoContent)}\n` 
            fileSystem.appendFileSync(
                filePath,
                lineToWright,
                (error, result) => {
                    if (error) console.log(error);
                }
            );
        }
        
    }

    getActualTimestamp() {
        const time = new Date();
        return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDay()} ` +
            `${time.getHours()}:${time.getMinutes()}`;
    }
}
