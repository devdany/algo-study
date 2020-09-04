const addResultFromStack = (result, stack) => {
  while (stack.length !== 0) {
    result += stack.pop()
  }
  return result
}

const isFinishWord = (character) => {
  return character === ' ' || character === '\n'
}

export const reverseWord = (string) => {
  let stack = []
  let result = ''
  for (let i = 0; i < string.length; i++) {
    const character = string[i]
    if (isFinishWord(character)) {
      result = addResultFromStack(result, stack)
      result += ' '
      stack = []
    } else {
      stack.push(character)
    }

    if (i === string.length - 1) {
     result = addResultFromStack(result, stack)
    }
  }

  return result
}
