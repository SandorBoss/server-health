const Start = require('../start.js');
const start = new Start();

describe("start is working", () => {

    it("should return number 1", () => {
        expect(start.exIsOne()).toEqual(1);
    });

});
