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

    it("converts numbers to correct string", () => {
        expect(toString(500)).toEqual('500');
    })

    it("converts hexadesimal numbers to correct string", () => {
        expect(toString(0x00)).toEqual('0');
    })
    it("converts string to correct string", () => {
        expect(toString('1\\2')).toEqual('1\\2');
    })
    it("converts decimal number to correct string", () => {
        expect(toString(1.23)).toEqual('1.23');
    })
});