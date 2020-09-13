import { truckPassingTheBridge } from "./truckPassingTheBridge";

describe("truckPassingTheBridge", () => {
  it("다리를 지나는 트럭", () => {
    const result = truckPassingTheBridge(2, 10, [7, 4, 5, 6]);
    expect(result).toEqual(8);
  });
});
