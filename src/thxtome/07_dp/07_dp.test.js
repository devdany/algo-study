import { integerTriangle } from "./integerTriangle";

describe("integerTriangle", () => {
  it("정수 삼각형", () => {
    const result = integerTriangle([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
    expect(result).toEqual(30);
  });
});
