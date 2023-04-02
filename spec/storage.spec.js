const Storage = require('../storage');
const storage = new Storage();

const Constants = require('./test-constants.js');
const testConsts = new Constants();

describe("storage is working", () => {

    it("should be json with port", () => {
        expect(storage.portFromCore).toEqual(testConsts.testJson);
    });

    it("should be a string number", () => {
        expect(storage.portToQuery).toEqual(testConsts.testPort);
    });

    it("should get file content", () => {
        let fileContent = storage.getFileContent(testConsts.testPort);
        expect(fileContent).toEqual(testConsts.fileContent);
    }) 

});
