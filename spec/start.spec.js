const Start = require('../start.js');
const start = new Start();

const Constants = require('./test-constants.js');
const testConsts = new Constants();

describe("start is working", () => {

    it("should set port number", () => {
        start.setPort(testConsts.testPort);
        expect(start.inputPort).toEqual('8080');
    });

    it("should set a json with port", () => {
        start.setPort(testConsts.testPort);
        start.updateServerInfo();
        expect(start.outputJson).toEqual(testConsts.testJson);
    });

});
