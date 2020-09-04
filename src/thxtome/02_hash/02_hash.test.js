import { bestAlbum } from "./bestAlbum";
import { camouflage } from "./camouflage";

describe("bestAlbum", () => {
  it("베스트앨범", () => {
    const result = bestAlbum(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
    expect(result).toEqual([4, 1, 3, 0]);
  });
});

describe("camouflage", () => {
  it("위장", () => {
    const result = camouflage([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ]);
    expect(result).toEqual(5);
  });
});
