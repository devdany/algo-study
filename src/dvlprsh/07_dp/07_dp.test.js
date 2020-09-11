import triangle from "./solution";

describe("02_dp_test", () => {
  it("정수삼각형", () => {
    const result = triangle([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
    expect(result).toEqual(30);
  })
});