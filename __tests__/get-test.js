import get from "./../src/get";

describe("get", () => {
  const docstringObject = { a: [{ b: { c: 3 } }] };
  const docstringTestCases = [
    { input: ["a[0].b.c"], output: 3 },
    { input: [["a", "0", "b", "c"]], output: 3 },
    { input: ["a.b.c", "default"], output: "default" },
  ];

  for (const { input, output } of docstringTestCases) {
    const inputString = input.map((element) => `"${element}"`).join(", ");
    it(`get(${inputString}) to equal ${output} like in docstring`, () => {
      expect(get(docstringObject, ...input)).toEqual(output);
    });
  }

  const customObject = { a: { b: 2 } };

  const customTestCases = [
    {
      object: customObject,
      inputPath: ["a", "b"],
      def: "",
      output: 2,
    },
    {
      object: customObject,
      inputPath: ["a", "c"],
      def: 10,
      output: 10,
    },
    {
      object: customObject,
      inputPath: ["a", "b"],
      def: 10,
      output: 2,
    },
    {
      caseName: "can fetch falsy values",
      object: { y: false },
      inputPath: "y",
      output: false,
    },
    {
      caseName: "returns *undefined*, on a path that is an empty array",
      object: { p: "q" },
      inputPath: [],
      output: undefined,
    },
    {
      caseName: "can get deep null values",
      object: { p: { q: 2 }, x: { y: null } },
      inputPath: ["x", "y"],
      output: null,
    },
    {
      caseName:
        "does not crash when fetching property access on nested non-objects",
      object: { x: null },
      inputPath: ["p", "q"],
      output: undefined,
    },
    {
      caseName: "should return undefined if object is null",
      object: null,
      inputPath: ["p", "q"],
      output: undefined,
    },
    {
      caseName: "should return undefined if object is null",
      object: customObject,
      inputPath: null,
      output: undefined,
    },
  ];

  for (const { object, inputPath, def, output, caseName } of customTestCases) {
    const args = def ? [inputPath, def] : [inputPath];

    const inputStr = args.map((element) => `"${element}"`).join(", ");
    const defaultCaseName = `can get a simple nested property: ${inputStr}`;
    it(caseName || defaultCaseName, () => {
      expect(get(object, ...args)).toEqual(output);
    });
  }
});
