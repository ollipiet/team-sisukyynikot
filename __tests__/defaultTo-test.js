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

  const safeDefault = "Safe default value";
  // Many of these are acceptable, but NaN doesn't default like it says in the docstring
  const falsyValues = [undefined, null, NaN, 0, false, [], {}, ""];
  for (const value of falsyValues) {
    it(`should default from ${new String(value)}`, () => {
      expect(defaultTo(value, safeDefault)).toBe(safeDefault);
    });
  }
});
