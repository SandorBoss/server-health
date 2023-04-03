const Core = require('../core.js');
const core = new Core();
const Storage = require('../storage.js');
const storage = new Storage();
const Constants = require('./test-constants.js');
const testConsts = new Constants();

describe("start is working", () => {

    it("should send query string to storage", () => {
        const resultObject = core.getDataWithQueryString(
            testConsts.testQueryString
        );
        expect(resultObject).toEqual(testConsts.testResultJson);
    });

    it("should create json from storage answer", () => {
        const answerJson = core.parseAnswerToJson(
            testConsts.testResultObject
        );
        expect(answerJson).toEqual(testConsts.testResultJson);
    });

    it("should append actual entry to log file", () => {
        const actualEntry = core.writeLogEntry(
            testConsts.testQueryString,
            testConsts.testLogPath
        );
        const logContent = storage.getLogContent(testConsts.testLogPath);
        expect(logContent[0]).toContain('80gb');
        
    })

    it("should return log items as json", () => {
        const stringToContain1 = "[";
        const stringToContain2 = "]";
        const logData = core.getLogData(testConsts.testLogPath);
        expect(logData).toContain(stringToContain1);
        expect(logData).toContain(stringToContain2);
    });

});
