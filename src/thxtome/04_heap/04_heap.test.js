import { diskController } from "./diskController";

describe("diskController", () => {
  it("디스크 컨트롤러", () => {
    const result = diskController([
      [0, 3],
      [1, 9],
      [2, 6],
    ]);
    expect(result).toEqual(9);
  });
});
