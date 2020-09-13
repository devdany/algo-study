import solutions from './solutions'

describe('06_greedy_test', () => {
  it('섬 연결하기', () => {
    const result = solutions(10, 2);
    expect(result).toEqual([4, 3]);
  });
})