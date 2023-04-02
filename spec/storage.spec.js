const { time } = require('console');
const Storage = require('../storage');
const storage = new Storage();

const Constants = require('./test-constants.js');
const testConsts = new Constants();

const fileSystem = require('fs');

describe("storage", () => {

    it("should return a port number as string", () => {
        const queryString = testConsts.testQueryString;
        expect(storage.transformQueryStringToPortNumber(queryString))
            .toEqual(testConsts.testPort);
    });

    it("should get file content", () => {
        let fileContent = storage.getInfoFileContent(testConsts.testPort);
        expect(fileContent).toEqual(testConsts.testFileContent);
    });

    it("should create object from query answer", () => {
        const answerObject = storage.createObjectFromQueryResult(
            testConsts.testPort,
            testConsts.testFileContent
        );
        expect(answerObject).toEqual(testConsts.testResultObject);
    });

    it("should return server infos as object", () => {
        const queryAnswer = storage.queryInFileSystem(
            testConsts.testQueryString
        );
        expect(queryAnswer).toEqual(testConsts.testResultObject);
    });

    it("should get actual time", () => {
        const time = new Date();
        const actualTime =
            `${time.getFullYear()}-${time.getMonth()+1}-${time.getDay()} ` +
            `${time.getHours()}:${time.getMinutes()}`;
        expect(storage.getActualTimestamp()).toEqual(actualTime);
    });

    it("should replace line-breaks with spaces", () => {
        const inputString = 'a\nb\nc';
        const expectedString = 'a b c';
        const actualOutputString = storage.replaceLineBreaksWithSpaces(
            inputString
        );
        expect(actualOutputString).toEqual(expectedString);
    })

    it("should save last query in log file", () => {
        const infoContent = storage.getInfoFileContent(testConsts.testPort)
            .replace('\n', ' ');
        const timestamp = storage.getActualTimestamp();
        const fileName = './request-log/request-log.txt';
        storage.writeRequestLog(testConsts.testPort);
        const logContent = fileSystem.readFileSync(fileName, 'utf8');
        const stringToSearch =
            `${timestamp} ${testConsts.testPort} ${infoContent}`;
        expect(logContent).toContain(stringToSearch);
    });

});
