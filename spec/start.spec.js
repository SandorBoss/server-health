const Start = require('../start.js');
const start = new Start();

let testPort = '8080';
let testJson = {
    port: 8080
}

describe("start is working", () => {

    it("should set port number", () => {
        start.setPort(testPort);
        expect(start.inputPort).toEqual('8080');
    });

    it("should set a json with port", () => {
        start.updateServerInfo()
        expect(start.outputJson).toEqual(testJson);
    });

});
