import words from "./../src/words.js";

describe("words", () => {
  const docstringTestCases = [
    {
      input: ["fred, barney, & pebbles"],
      output: ["fred", "barney", "pebbles"],
    },
    {
      input: ["fred, barney, & pebbles", /[^, ]+/g],
      output: ["fred", "barney", "&", "pebbles"],
    },
  ];

  for (const { input, output } of docstringTestCases) {
    const inputString = input.map((element) => `"${element}"`).join(", ");

    it(`words(${inputString}) should be ${output} like in docstring`, () => {
      expect(words(...input)).toEqual(output);
    });
  }

  const customTestCases = [
    {
      input: ["Mari, undefined, null & Infinity"],
      output: ["Mari", "undefined", "null", "Infinity"],
    },
    {
      input: ["`lev, Macshû, rn & Hø"],
      output: ["lev", "Macshû", "rn", "Hø"],
    },
  ];
  for (const { input, output } of customTestCases) {
    it(`to handle international words, data types and short names: "${output}" [input: toString(${input})]`, () => {
      expect(words(...input)).toEqual(output);
    });
  }
});
