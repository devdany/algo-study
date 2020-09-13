import diskController from "./diskController";
import dualPriorityQueue from "./dualPriorityQueue";

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

describe("dualPriorityQueue", () => {
  it("이중 우선순위 큐", () => {
    const result = dualPriorityQueue(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]);
    expect(result).toEqual([0, 0]);
  });
});