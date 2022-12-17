import difference from "./../src/difference";

describe("difference", () => {
  const first = [2, 1];
  const second = [2, 3];
  const output = [1];
  it(`difference(${first}, ${second}) should be ${output} like in docstring`, () => {
    expect(difference(first, second)).toEqual(output);
  });

  it("should handle duplication", () => {
    expect(difference([1, 2, 2], [1])).toEqual([2, 2]);
    expect(difference([1, 2, 2], [2])).toEqual([1]);
    expect(difference([1, 2, 2], [1, 2])).toEqual([]);
  });

  it("should return an empty array for non-arraylikes", () => {
    expect(difference("asdf", "a")).toEqual([]);
    expect(difference(1)).toEqual([]);
  });
});
