import { reverseWords } from "./reverseWords";

describe('01_stack_test', () => {
  it('단어 뒤집기', () => {
    const result = reverseWords('Lets study algorithm')
    expect(result).toEqual('steL yduts mhtirogla')
  })
})