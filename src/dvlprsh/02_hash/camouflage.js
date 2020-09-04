// Time O(N)
/**
 * 
 * clothes_kind_cnt: { 의상 종류 : 개수 }
 */
function solution(clothes) {
  const clothes_kind_cnt = clothes.reduce((acc, v) => {
      acc[v[1]] ? acc[v[1]] += 1 : acc[v[1]] = 1;
      return acc;
  }, {});
  
  return Object.values(clothes_kind_cnt)
      .reduce((acc, v) => acc * (v + 1), 1) 
      -1;
}

export default solution;