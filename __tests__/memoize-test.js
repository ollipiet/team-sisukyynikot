import memoize from "./../src/memoize.js";

describe("memoize", () => {
  // Hash functions, for test, used to swizzle the key in function 
  const objectCacher = memoize(function(value, key) {
      return {key: key, value: value};
  }, function(value, key) {
      return key;
  });

  const nObj = objectCacher('a', 'alpha');
  const nObjAlias = objectCacher('b', 'alpha');

  // use memoization
  let upperStrFunc = memoize((s) => s.toUpperCase());

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
  // should use hash function to shake down the key 
  it(`object is created if second argument is used as key `, () => {
    expect(nObj).not.toEqual(void 0);
  });
  it(`object is cached if second argument is used as key`, () => {
    expect(nObj).toEqual(nObjAlias);
  });
  it(`object is not altered if second argument is used as key`, () => {
    expect(nObj.value).toEqual('a');
  });

  // Test upperStrFunc
  it(`check exposed memoized cache, equals transformed strings`, () =>{
    expect(upperStrFunc('foo')).toEqual('FOO');
  });
  it(`check exposed memoized cache, equals transformed strings`, () =>{
    expect(upperStrFunc('plus')).toEqual('PLUS');
  });


  // Should be modified through memoize cache, exposes and alters memoized value from cache.set
  it(`check exposed memoized equals cached (altered) strings`, () =>{
    // Modify cache
    upperStrFunc.cache.set('foo', 'PLUS');
    expect(upperStrFunc('foo')).toEqual('PLUS');
  });
  it(`check exposed memoized equals cached (altered) strings`, () =>{
    // Modify cache
    upperStrFunc.cache.set('plus', 'FOO');
    expect(upperStrFunc('plus')).toEqual('FOO');
  });

});
