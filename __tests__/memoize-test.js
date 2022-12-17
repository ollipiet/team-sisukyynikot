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

  it("should use the cache", () => {
    let fibsCalculated = 0;
    const fib = memoize(function (n) {
      fibsCalculated += 1;
      return n < 2 ? n : fib(n - 1) + fib(n - 2);
    });
    expect(fib(15)).toEqual(610);
    expect(fibsCalculated).toEqual(16);

    // Test that value is fetched from cache and not recalculated
    expect(fib(15)).toEqual(610);
    expect(fibsCalculated).toEqual(16);
  });

  it("should resolve cache keys correctly", () => {
    const objectCacher = memoize(
      function (key, value) {
        return { key, value };
      },
      function (key, value) {
        return key;
      }
    );

    // Object is created if second argument is used as key
    const initialObject = objectCacher("key", "a");
    expect(initialObject.key).toEqual("key");
    expect(initialObject.value).toEqual("a");

    // Resolver only cares about the key, so
    // even if value is different, the same object should be returned
    expect(initialObject).toBe(objectCacher("key", "b"));

    // Object is not altered by the previous operation
    expect(initialObject.value).toEqual("a");
  });

  it("should allow direct cache modifications", () => {
    let cachedCapitalizer = memoize((s) => s.toUpperCase());
    // Check exposed memoized cache, equals transformed strings
    expect(cachedCapitalizer("a")).toEqual("A");
    expect(cachedCapitalizer("b")).toEqual("B");

    // Modify cache
    const other = "Something completely different";
    cachedCapitalizer.cache.set("a", other);
    expect(cachedCapitalizer("a")).toEqual(other);
  });
});
