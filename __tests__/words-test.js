import words from "./../src/words";

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
    {
      caseName: "should work with ascii characters",
      input: ["Supercalifragilisticexpialidocious"],
      output: ["Supercalifragilisticexpialidocious"],
    },
    {
      input: ["a"],
      output: ["a"],
    },
    {
      input: ["ä"],
      output: ["ä"],
    },
    {
      caseName: "should give an empty array for empty string",
      input: [""],
      output: [],
    },
    {
      caseName: "should give an empty array for a string with a single space",
      input: [" "],
      output: [],
    },
    {
      caseName: "should work with a custom pattern",
      input: ["word", /\w/g],
      output: ["w", "o", "r", "d"],
    },
    {
      caseName: "should give an empty array when custom pattern whiffs",
      input: ["word", /\d/g],
      output: [],
    },
  ];
  for (const { input, output, caseName } of customTestCases) {
    const defaultCaseName = `to handle international words, data types and short names: "${output}" [input: toString(${input})]`;
    it(caseName || defaultCaseName, () => {
      expect(words(...input)).toEqual(output);
    });
  }
});
