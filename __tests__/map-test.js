import map from "./../src/map";
describe("map", () => {
  const array = [4, 8];
  const output = [16, 64];

  function square(n) {
    return n * n;
  }
  it(`map(${array}, ${square}) should be ${output} like in docstring`, () => {
    expect(map(array, square)).toEqual(output);
  });
});
