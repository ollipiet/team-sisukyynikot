import memoize from "./../src/memoize.js";

describe("function memoize", () => {
    it("should return an expected value when passed a function", () => {
        const fib = memoize(function (n) {
            return n < 2 ? n : fib(n - 1) + fib(n - 2);
        });
        expect(fib(15)).toEqual(610);
    });
});