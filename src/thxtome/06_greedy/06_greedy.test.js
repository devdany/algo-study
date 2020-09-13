import { connectingIsland } from "./connectingIsland";

describe("connectingIsland", () => {
  it("섬 연결하기", () => {
    const result = connectingIsland(4, [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ]);
    expect(result).toEqual(4);
  });
});
