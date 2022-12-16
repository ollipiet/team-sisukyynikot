import get from "./../src/get.js";

describe("get", () => {
  const object = { a: [{ b: { c: 3 } }] };
  const values = [
    { input: ["a[0].b.c"], output: 3 },
    { input: [["a", "0", "b", "c"]], output: 3 },
    { input: ["a.b.c", "default"], output: "default" },
  ];
  const object2 = {a: {b: 2}};
  const object3 = { y: false };
  const object4 = {p: {q: 2}, x: {y: null}};

  const valuesPlus = [
    { 
        inputPath: [['a', 'b']], def:'', output: 2
    },
    {
        inputPath: [['a', 'c']], def:10, output: 10
    },
    {
        inputPath: [['a', 'b']], def: 10, output: 2
    }
  ]

  for (const { input, output } of values) {
    const inputString = input.map((element) => `"${element}"`).join(", ");
    it(`get(${inputString}) to equal ${output} like in docstring`, () => {
      expect(get(object, ...input)).toEqual(output);
    });
  }

  for (const { inputPath, def, output } of valuesPlus) {
    const inputPart1 = inputPath.map((element) => `"${element}"`).join(", ");
    const inputStr = inputPart1 + `, ${def}`;
    it(`can get a simple nested property: ${inputStr}`, () => {
      expect(get(object2, ...inputPath, def)).toEqual(output);
    })
  }

  it(`can fetch falsy values`, () => {
    expect(get(object3, 'y')).toEqual(false);
  });

  it(`returns *undefined*, on a path that is an empty array`, () => {
    expect(get({p: 'q'}, [])).toEqual(void 0)
  });
  
  it(`can get deep null values`, () => {
    expect(get(object4, ['x', 'y'])).toEqual(null);
  });

  it(`does not crash when fetching property access on nested non-objects`, () => {
    expect(get({x: null}, ['p','q'])).toEqual(void 0)
  })
});
