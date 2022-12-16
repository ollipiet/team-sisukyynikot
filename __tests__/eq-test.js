import eq from "./../src/eq.js";

describe("Eq", () => {
  const object = { a: 1 };

  const values = [
    { input: [object, object], output: true },
    { input: [object, { a: 1 }], output: false },
    { input: ["a", "a"], output: true },
    { input: ["a", Object("a")], output: false },
    { input: [NaN, NaN], output: true },
  ];

  for (const {
    input: [first, second],
    output,
  } of values) {
    it(`eq(${first}, ${second}) should be ${output} like in docstring`, () => {
      expect(eq(first, second)).toBe(output);
    });
  }
});
