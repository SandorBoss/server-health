const Core = require('../core.js');
const core = new Core();

const Constants = require('./test-constants.js');
const testConsts = new Constants();

describe("start is working", () => {

    it("should send query string to storage", () => {
        const resultObject = core.getDataWithQueryString(
            testConsts.testQueryString
        );
        expect(resultObject).toEqual(testConsts.testResultObject);
    });

});
