function solution(brown, yellow) {
  for (let i =1; i <= Math.pow(yellow, 1/2); i++) {
      if (yellow % i === 0) {
          const height = i;
          const width = yellow / height;
          if (2 * (height + width) + 4 === brown)
              return [width + 2, height + 2];
      }
  }
}

export default solution;