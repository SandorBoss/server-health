const Storage = require('../storage');
const storage = new Storage();

const Constants = require('./test-constants.js');
const testConsts = new Constants();

describe("storage", () => {

    it("should return query result as json", () => {
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
    }); 

});
