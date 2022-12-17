import defaultTo from "./../src/defaultTo";

describe("defaultTo", () => {
  // "default" is a restricted keyword
  const docstringTestCases = [
    { value: 1, fallback: 10, output: 1 },
    { value: undefined, fallback: 10, output: 10 },
  ];

  for (const { value, fallback, output } of docstringTestCases) {
    it(`defaultTo(${value}, ${fallback}) should be ${output} like in docstring`, () => {
      expect(defaultTo(value, fallback)).toBe(output);
    });
  }
});
