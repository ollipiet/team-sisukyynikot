import eq from "./../src/eq";

describe("eq", () => {
  const object = { a: 1 };

  const docstringTestCases = [
    { input: [object, object], output: true },
    { input: [object, { a: 1 }], output: false },
    { input: ["a", "a"], output: true },
    { input: ["a", Object("a")], output: false },
    { input: [NaN, NaN], output: true },
  ];

  for (const { input, output } of docstringTestCases) {
    const inputStr = input.map((value) => new String(value)).join(", ");

    it(`eq(${inputStr}) should be ${output} like in docstring`, () => {
      expect(eq(...input)).toBe(output);
    });
  }

  // Tests all eq pairs between falsy types
  const falsyValues = [undefined, null, NaN, 0, false, [], {}, ""];

  const customTestCases = falsyValues.flatMap((value, index) => {
    return falsyValues.flatMap((otherValue, otherIndex) => {
      const output = index === otherIndex; // They should only equal themselves
      const inputs = output
        ? [[value, otherValue]]
        : [
            [value, otherValue],
            [otherValue, value],
          ];

      return inputs.map((input) => {
        const inputStr = input
          .map((value) => new String(value) || value.toString())
          .join(", ");

        return {
          caseName: `eq(${inputStr}) should be ${output}`,
          input,
          output,
        };
      });
    });
  });

  for (const { input, output, caseName } of customTestCases) {
    it(caseName, () => {
      expect(eq(...input)).toBe(output);
    });
  }
});
