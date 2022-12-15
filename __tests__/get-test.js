import get from "./../src/get.js";

describe("function get", () => {
    // test if you get the value ['a,0,b,c'] or ['a', '0', 'b', 'c'] from object
    it("should ..", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.c')).toEqual(3);
    });

    // test if you get correct value when default is present.
    it("should ..", () => {
        const object2 = { 'a': [{ 'b': { 'c': 0 } }] };
        const undefinedVal = undefined;
        expect(get(object2, ['a','0','b','c'], undefinedVal)).not.toEqual(undefined);
    });

    // test if you get default value from object, with undefined resolved values
    const object2 = { 'a': [{ 'b': { 'c': 0 } }] };
    const undefinedVal = undefined;
    expect(get(object2, ['a,b,c'], undefinedVal)).toEqual(undefined);
});