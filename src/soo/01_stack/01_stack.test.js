import { reverseWord } from './solutions'

describe('01_stack_test', () => {
  it('단어 뒤집기', () => {
    const result = reverseWord('Lets study algorithm')
    expect(result).toEqual('steL yduts mhtirogla')
  })
})