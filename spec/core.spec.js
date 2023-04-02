const Core = require('../core.js');
const core = new Core();

const Constants = require('./test-constants.js');
const testConsts = new Constants();

describe("start is working", () => {

    it("should send query string to storage", () => {

    });
    
    it("should set port number", () => {
        core.setPort(testConsts.testPort);
        expect(core.inputPort).toEqual('8080');
    });

    it("should set a json with port", () => {
        core.setPort(testConsts.testPort);
        core.updateServerInfo();
        expect(core.outputJson).toEqual(testConsts.testJson);
    });

});
