import isBuffer from "./../src/isBuffer";

describe("isBuffer", () => {
  const docstringTestCases = [
    { input: "new Buffer(2)", output: true },
    { input: "new Uint8Array(2)", output: false },
  ];

  for (const { input, output } of docstringTestCases) {
    // Done this way to better render the case, I don't like it
    it(`isBuffer(${input}) should be ${output} like in docstring`, () => {
      expect(isBuffer(eval(input))).toBe(output);
    });
  }

  it("should work for new buffer type", () => {
    expect(isBuffer(Buffer.alloc(2))).toBe(true);
  });
});
