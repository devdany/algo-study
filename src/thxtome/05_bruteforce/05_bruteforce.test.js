import { carpet } from "./carpet";

describe("carpet", () => {
  it("카펫", () => {
    const result = carpet(10, 2);
    expect(result).toEqual([4, 3]);
  });
});
