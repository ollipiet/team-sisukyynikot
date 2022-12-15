import toString from "./../src/toString.js";

describe("function toString", () => {

    // Test if toString converts null to nothing
    it("should ..", () => {
        expect(toString(null)).toEqual('');
    });

    it("converts values like -1 and -0 to correct value", () => {
        expect(toString(-0)).toEqual('-0');
    });

    it("converts values in a list to correct string", () => {
        expect(toString([1,2,3])).toEqual('1,2,3');
    })
});