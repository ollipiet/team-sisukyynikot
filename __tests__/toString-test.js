import toString from "./../src/toString";

describe("toString", () => {
  const docstringTestCases = [
    { input: null, output: "" },
    { input: -0, output: "-0" },
    { input: [1, 2, 3], output: "1,2,3" },
  ];

  for (const { input, output } of docstringTestCases) {
    it(`toString(${input}) should be "${output}" like in docstring`, () => {
      expect(toString(input)).toEqual(output);
    });
  }

  const primitiveTestCases = [
    { input: [500], output: "500" },
    { input: 0x00, output: "0" },
    { input: "1\\2", output: "1\\2" },
    { input: "1.23", output: "1.23" },
    { input: Symbol("1.23"), output: "1.23" },
    { input: [null], output: "" },
    { input: ["start", null, "end"], output: "start,,end" },
  ];
  for (const { input, output } of primitiveTestCases) {
    it(`to ensure interoperatibility of primitive data types should be converted: "${output}" [input: toString(${input.toString()}]`, () => {
      expect(toString(input)).toEqual(output);
    });
  }
});
