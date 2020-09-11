function solution(triangle) {
  for(let i=0; i< triangle.length - 1; i++) {
      const current = triangle[i];
      const next = triangle[i+1];
      const sum1 = [...current, 0].map((_v, _i) => next[_i] + _v);
      const sum2 = [0, ...current].map((_v, _i) => next[_i] + _v);
      triangle[i+1] = sum1.map((v, i) => Math.max(v, sum2[i]));
  }
  return Math.max(...triangle[triangle.length - 1]);
}

export default solution;