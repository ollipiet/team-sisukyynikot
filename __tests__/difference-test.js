import difference from "./../src/difference";

describe("difference", () => {
  const first = [2, 1];
  const second = [2, 3];
  const output = [1];
  it(`difference(${first}, ${second}) should be ${output} like in docstring`, () => {
    expect(difference(first, second)).toEqual(output);
  });
});
