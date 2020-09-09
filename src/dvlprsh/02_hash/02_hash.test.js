import bestAlbum from "./solutions";
import camouflage from "./camouflage";

describe("02_hash_test", () => {
  it("베스트앨범", () => {
    const result = bestAlbum(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
    expect(result).toEqual([4, 1, 3, 0]);
  });
});

describe("camouflage_test", () => {
  it("위장", () => {
    const result = camouflage([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
    expect(result).toEqual(5);
  });
});