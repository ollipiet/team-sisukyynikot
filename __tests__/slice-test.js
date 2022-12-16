import slice from "./../src/slice";

describe("slice", () => {
  const values = [{ array: [1, 2, 3, 4], args: [2], output: [3, 4] }];

  for (const { array, args, output } of values) {
    const inputString = array + ", " + args.join(", ");
    it(`slice(${inputString}) should be ${output} like in docstring`, () => {
      expect(slice(array, ...args)).toEqual(output);
    });
  }
});
