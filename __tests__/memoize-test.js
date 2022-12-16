import memoize from "./../src/memoize.js";

describe("memoize", () => {
  it("should work like in the docstring", () => {
    const object = { a: 1, b: 2 };
    const other = { c: 3, d: 4 };
    const values = memoize(values);

    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);

    object.a = 2;
    expect(values(object)).toEqual([1, 2]);

    values.cache.set(object, ["a", "b"]);
    expect(values(object)).toEqual(["a", "b"]);
  });

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
