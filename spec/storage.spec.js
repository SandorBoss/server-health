const Storage = require('../storage');
const storage = new Storage();

const Constants = require('./test-constants.js');
const testConsts = new Constants();

describe("storage", () => {

    it("should return a port number as string", () => {
        const queryString = testConsts.testQueryString;
        expect(storage.transformQueryStringToPortNumber(queryString))
            .toEqual(testConsts.testPort);
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
    
    /*it("should return query result as object", () => {
        let answerJson = storage.queryInFileSystem();
        expect(answerJson).toEqual(
            {
                port: '8080',
                cpuUsage: '65%',
                freeMemory: '80gb'
            }
        );
    });

    it("should parse file content with port to json", () => {
        let fileContent = storage.getFileContent(testConsts.testPort);
        let answerJson = storage.parseAnswerToJson(
            testConsts.testPort,
            fileContent
        );
        expect(answerJson).toEqual(
            {
                port: '8080',
                cpuUsage: '65%',
                freeMemory: '80gb'
            }
        );
    });
    
    it("should be json with port", () => {
        expect(storage.portFromCore).toEqual(testConsts.testJson);
    });

    it("should parse port to string", () => {
        let portFromCore = storage.portFromCore;
        let portAsString = storage.parsePortToString();
        expect(portAsString).toEqual('8080');
    });

    it("should get file content", () => {
        let fileContent = storage.getFileContent(testConsts.testPort);
        expect(fileContent).toEqual(testConsts.fileContent);
    });*/

});
