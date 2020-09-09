import { doublePriorityQueue } from './solutions'

describe('04_solution_test', () => {
  it('이중 우선순위 큐', () => {
    expect(doublePriorityQueue(['I 7', 'I 5', 'I -5', 'D -1'])).toEqual([7, 5])
    expect(doublePriorityQueue(['I 4', 'I 3', 'I 2', 'I 1', 'D 1', 'D 1', 'D -1', 'D -1', 'I 5', 'I 6'])).toEqual([6, 5])
    expect(doublePriorityQueue(['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333'])).toEqual([333, -45])
    expect(doublePriorityQueue(['I 1', 'I 2', 'I 3', 'I 4', 'I 5', 'I 6', 'I 7', 'I 8', 'I 9', 'I 10', 'D 1', 'D -1', 'D 1', 'D -1', 'I 1', 'I 2', 'I 3', 'I 4', 'I 5', 'I 6', 'I 7', 'I 8', 'I 9', 'I 10', 'D 1', 'D -1', 'D 1', 'D -1'])).toEqual([8, 3])
  })
})