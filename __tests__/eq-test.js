import eq from "./../src/eq.js";

describe("function eq", () => {
    it("should be same, then pass", () => {
        const object = "foo";
        const other = "foo";

        expect(object).toEqual(other);
    });
    it("should not pass, when unequal", () => {
        const foo = "foo";
        const bar = "bar";

        expect(foo).not.toEqual(bar);
    });
    it("should be truthy with NaN values", () => {
        const NoValue = NaN;
        const NoValue2 = NaN;

        expect(NoValue).toEqual(NoValue2);
    });
});