import memoize from "./../src/memoize.js";

describe("function memoize", () => {
    it("should return an expected value when passed a function", () => {
        const fib = memoize(function (n) {
            return n < 2 ? n : fib(n - 1) + fib(n - 2);
        });
        expect(fib(15)).toEqual(610);
    });
    // Should be able to be changed later

    // Should be modified through memoize.cache weakmap

    // more...
    /* it("should have right properties", () => {
        let a = "fooz "; 
        const fn = ( a ) => a+"a";
        
        //dummy 
        expect(memoized()).toBe(fn.foo);

    }) */
    
});