function solution(brown, yellow) {
  const answers = [];
  const result = [];
  const sum = brown + yellow;

  // 약수구하기
  for (let i=1; i<=sum; i++) {
    if (sum % i === 0) {
      const j = sum / i;
      answers.push([i, j]);
    }
  }

  // 노란색 카펫 갯수 매칭
  for (const answer of answers) {
    if (answer[1] <= answer[0]) {
      const row = answer[1] - 2;
      const col = answer[0] - 2;

      if (row * col === yellow) {
        result.push(answer[0], answer[1])
      }
    }

  }


  return result;
}
