import map from "./../src/map";

describe("map", () => {
  const array = [4, 8];
  const output = [16, 64];

  function square(n) {
    return n * n;
  }
  it(`map(${array}, ${square}) should be ${output} like in docstring`, () => {
    expect(map(array, square)).toEqual(output);
  });

  const testCases = [
    {
      caseName: "should work with an empty list",
      array: [],
      output: [],
    },
    {
      caseName: "should work with a null array",
      array: null,
      output: [],
    },
    {
      caseName: "should work with one item lists",
      array: [2],
      output: [4],
    },
    {
      caseName: "should work across type conversions",
      array: [1, 2, 3],
      func: (value) => undefined,
      output: [undefined, undefined, undefined],
    },
    {
      caseName: "should work for object keys",
      array: Object.keys({ 1: 2, 3: 4 }),
      output: [1, 9],
    },
    {
      caseName: "should work for object values",
      array: Object.values({ 1: 2, 3: 4 }),
      output: [4, 16],
    },
    {
      caseName: "should give iteratee correct context",
      array: [1, 2],
      func: (item, index, arr) => {
        return [item, index, arr];
      },
      output: [
        [1, 0, [1, 2]],
        [2, 1, [1, 2]],
      ],
    },
    {
      // Hecking love type coercion
      caseName: "should work with a string",
      array: "1234",
      output: [1, 4, 9, 16],
    },
  ];

  for (const { caseName, array, func, output } of testCases) {
    it(caseName, () => {
      expect(map(array, func || square)).toEqual(output);
    });
  }
});
