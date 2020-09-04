import bestAlbum from "./solutions";

describe("02_hash_test", () => {
  it("베스트앨범", () => {
    const result = bestAlbum(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
    expect(result).toEqual([4, 1, 3, 0]);
  });
});