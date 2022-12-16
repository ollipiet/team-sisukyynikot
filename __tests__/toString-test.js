import toString from "./../src/toString.js";

describe("toString", () => {
  const values = [
    { input: null, output: "" },
    { input: -0, output: "-0" },
    { input: [1, 2, 3], output: "1,2,3" },
  ];
  
  const valuesCustom = [
    { input: [500] , output: "500"},
    { input: 0x00, output: "0"},
    { input: "1\\2", output: "1\\2"},
    { input: "1.23", output: "1.23"}
  ]

  for (const { input, output } of values) {
    it(`toString(${input}) should be "${output}" like in docstring`, () => {
      expect(toString(input)).toEqual(output);
    });
  }

  for (const {input, output } of valuesCustom ) {
    it(`to ensure interoperatibility of primitive data types should be converted: "${output}" [input: toString(${input}]`, () => {
      expect(toString(input)).toEqual(output);
    });
  }

});
