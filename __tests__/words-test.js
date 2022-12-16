import words from "./../src/words.js";

describe("words", () => {
  const values = [
    {
      input: ["fred, barney, & pebbles"],
      output: ["fred", "barney", "pebbles"],
    },
    {
      input: ["fred, barney, & pebbles", /[^, ]+/g],
      output: ["fred", "barney", "&", "pebbles"],
    },
  ];

  for (const { input, output } of values) {
    const inputString = input.map((element) => `"${element}"`).join(", ");

    it(`words(${inputString}) should be ${output} like in docstring`, () => {
      expect(words(...input)).toEqual(output);
    });
  }

  //words() can be improved with a regular expression string

  // test the power and empty characters of regex matcher in words.js

  // test how much unicode words can be matched, if for example we turn it around (just for fun)

  // tricks scrambled unicodewords to use a 'flag', 'skull', --- 'other emoji'

  // use nulls, undefined's and numbers to test matches
});
