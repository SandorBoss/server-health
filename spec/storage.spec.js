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

    it("should get file content", () => {
        let fileContent = storage.getFileContent(testConsts.testPort);
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

});
