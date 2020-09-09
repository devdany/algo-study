import { truckInBridge } from './solutions'

describe('02_solution_test', () => {
  it('다리를 지나는 트럭', () => {
    expect(truckInBridge(2, 10, [7, 4, 5, 6])).toBe(8)
    expect(truckInBridge(100, 100, [10])).toBe(101)
    expect(truckInBridge(100, 100, [10,10,10,10,10,10,10,10,10,10])).toBe(110)
  })
})