import slice from "./../src/slice";

describe("slice", () => {
  const docstringTestCases = [
    { array: [1, 2, 3, 4], args: [2], output: [3, 4] },
  ];

  for (const { array, args, output } of docstringTestCases) {
    const inputString = array + ", " + args.join(", ");
    it(`slice(${inputString}) should be ${output} like in docstring`, () => {
      expect(slice(array, ...args)).toEqual(output);
    });
  }

  const customArray = ["a", "b", "c", "d"];
  const customTestCases = [
    {
      args: [1, 2],
      output: ["b"],
    },
    {
      args: [1, 3],
      output: ["b", "c"],
    },
    {
      args: [-2, -1],
      output: ["c"],
    },
    {
      args: [-1],
      output: ["d"],
    },
    {
      args: [0, 5],
      output: ["a", "b", "c", "d"],
    },
    {
      args: [10, 20],
      output: [],
    },
    {
      args: [null, 20],
      output: ["a", "b", "c", "d"],
    },
    {
      args: [-5],
      output: ["a", "b", "c", "d"],
    },
    {
      args: [3, 1],
      output: [],
    },
    {
      args: [-3, -1],
      output: ["b", "c"],
    },
  ];
  for (const { args, output } of customTestCases) {
    const inputString = customArray + ", " + args.join(", ");
    it(`slice(${inputString}) should be ${output}`, () => {
      expect(slice(customArray, ...args)).toEqual(output);
    });
  }

  it("should give an empty array if input array is null", () => {
    expect(slice(null, 2)).toEqual([]);
  });
});
