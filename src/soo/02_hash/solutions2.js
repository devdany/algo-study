function solution(clothes) {
  let answer = 1;
  let obj = {};
  for(let cloth of clothes) {
    if (obj.hasOwnProperty(cloth[1])) {
      obj[cloth[1]]++;
    } else {
      obj[cloth[1]] = 1;
    }
  }

  for (let key in obj) {
    answer = answer * (obj[key]+1);
  }

  answer = answer - 1;

  return answer;
}
