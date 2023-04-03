/*
 * filesystem írásáért és lekérdezéséért felelős modul
 */

const fileSystem = require('fs');

module.exports = class Storage {

    // url query feldolgozása és lekérdezése
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
    
    // az url query-ből kiszedjük a lekérdezéshez szükséges
    // portszámot stringként
    transformQueryStringToPortNumber(queryString) {
        return queryString.replace('port=', '');
    }

    // a log tartalmából tömböt készítünk
    transformLogDataToArray(logData) {
        return logData.split('\n');
    }

    // a porttal lekérdezett adatfájl tartalmából objectet gyártunk
    createObjectFromQueryResult(portString, fileContent) {
        const arrayFromFileContent = fileContent.split('\n');
        return {
            port: portString,
            cpuUsage: arrayFromFileContent[0],
            freeMemory: arrayFromFileContent[1]
        }
    }
    
    // plain textként kapjuk meg a porthoz tartozó fájl tartalmát
    getInfoFileContent(portString) {
        const fileContent = fileSystem.readFileSync(
            `./server-infos/${portString}.txt`,
            'utf8'
        );
        return fileContent;
    }

    // a logfájl tartalmát már tömbként kapjuk meg
    getLogContent(filePath) {
        const plainLogContent = fileSystem.readFileSync(
            filePath,
            'utf8'
        );
        return this.transformLogDataToArray(plainLogContent); 
    }

    // a logfájlba íráshoz a logolandó adatot szóközzel választjuk el
    replaceLineBreaksWithSpaces(stringToProcess) {
        return stringToProcess.replace(/(?:\n)/g, ' ');
    }

    // a kérést itt logoljuk
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

    // a log elkészítéséhez perc pontossággal rögzítjük a lekérdezés idejét
    getActualTimestamp() {
        const time = new Date();
        return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDay()} ` +
            `${time.getHours()}:${time.getMinutes()}`;
    }
}
