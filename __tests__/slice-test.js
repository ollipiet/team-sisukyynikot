import slice from "./../src/slice";

describe("slice", () => {
  const values = [{ array: [1, 2, 3, 4], args: [2], output: [3, 4] }];
  const abcValues = [
    {
      array: ['a', 'b', 'c', 'd'], args: [1, 2], output: ['b']
    },
    { 
      array: ['a', 'b', 'c', 'd'], args: [1, 3], output: ['b', 'c']
    },
    {
      array: ['a', 'b', 'c', 'd'], args: [-2, -1], output: ['c']
    },
    {
      array: ['a', 'b', 'c', 'd'], args: [-1], output: ['d']
    },
    {
      array: ['a', 'b', 'c', 'd'], args: [0, 5], output: ['a', 'b', 'c', 'd']
    },
    {
      array: ['a', 'b', 'c', 'd'], args: [10, 20], output: []
    }
  ];

  for (const { array, args, output } of values) {
    const inputString = array + ", " + args.join(", ");
    it(`slice(${inputString}) should be ${output} like in docstring`, () => {
      expect(slice(array, ...args)).toEqual(output);
    });
  }

  for (const { array, args, output } of abcValues) {
    const inputString = array + ", " + args.join(", ");
    it(`slice(${inputString}) should be ${output}`, () => {
      expect(slice(array, ...args)).toEqual(output);
    });
  }
});
