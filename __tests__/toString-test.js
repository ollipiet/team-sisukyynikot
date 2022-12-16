import toString from "./../src/toString.js";

describe("toString", () => {
  const values = [
    { input: null, output: "" },
    { input: -0, output: "-0" },
    { input: [1, 2, 3], output: "1,2,3" },
  ];
  for (const { input, output } of values) {
    it(`toString(${input}) should be "${output}" like in docstring`, () => {
      expect(toString(input)).toEqual(output);
    });
  }
});
