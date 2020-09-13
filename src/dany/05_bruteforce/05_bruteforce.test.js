import { carpet } from './solutions'

describe('05_bruteforce_test', () => {
  it('카펫', () => {
    expect(carpet(8, 1)).toEqual([3, 3])
    expect(carpet(10, 2)).toEqual([4, 3])
    expect(carpet(24, 24)).toEqual([8, 6])
  })
})