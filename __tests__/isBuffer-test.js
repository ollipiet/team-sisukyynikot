import isBuffer from "./../src/isBuffer";

describe("isBuffer", () => {
  const values = [
    { input: "new Buffer(2)", output: true },
    { input: "new Uint8Array(2)", output: false },
  ];

  for (const { input, output } of values) {
    // Done this way to better render the case, I don't like it
    it(`isBuffer(${input}) should be ${output} like in docstring`, () => {
      expect(isBuffer(eval(input))).toBe(output);
    });
  }
});
