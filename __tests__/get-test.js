import get from "./../src/get.js";

describe("get", () => {
  const object = { a: [{ b: { c: 3 } }] };
  const values = [
    { input: ["a[0].b.c"], output: 3 },
    { input: [["a", "0", "b", "c"]], output: 3 },
    { input: ["a.b.c", "default"], output: "default" },
  ];

  for (const { input, output } of values) {
    const inputString = input.map((element) => `"${element}"`).join(", ");
    it(`get(${inputString}) to equal ${output} like in docstring`, () => {
      expect(get(object, ...input)).toEqual(output);
    });
  }
});
