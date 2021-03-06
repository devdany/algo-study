import { bestAlbum, camouflage } from './solutions'

describe('02_solution_test', () => {
  it('베스트 앨범', () => {
    const result = bestAlbum(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])
    expect(result).toEqual([4, 1, 3, 0])
  })

  it('위장', () => {
    expect(camouflage([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])).toEqual(5)
  })
})