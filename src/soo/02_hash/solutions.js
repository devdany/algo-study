// Time O(N^2) | Space O(NM)

function solution(genres, plays) {
  const answer = [];
  let cur = '';
  // total obj 생성
  const obj = genres.reduce((acc, cur, idx) => {
    acc[cur] = acc[cur] ? acc[cur] + plays[idx] : plays[idx]
    return acc;
  }, {});

  // idx obj 생성
  const idxObj = genres.reduce((acc, cur, idx) => {
    acc[cur] ? acc[cur].push(idx) : acc[cur] = [idx];
    return acc;
  }, {});

  // obj의 value를 내림차순으로 정렬한다
  const entries = Object.entries(obj);
  const max = Object.values(obj).sort((a , b) => b - a);

  for (let i in max) {
    // 최대값의 key값을 구한다
    const target = entries.find(item => item[1] === max[i])[0];
    // idxObj의 key값에서 배열을 정렬한다
    const sortTarget = idxObj[target].map(i => plays[i]).sort((a, b) => b - a);

    // sortTarget의 길이만큼 반복해준다 (2로 fixed하지 않은이유는 1개짜리가 있을 수도 있어서)
    let j = 0;
    while (j < sortTarget.length) {
      // 2 이상일 때는 반복문을 멈춘다
      if (j === 2) break;

      let idx = plays.indexOf(sortTarget[j]);

      // 같은 값이여서 같은 index가 들어갔을 경우에는, idx값을 갱신한다
      if (answer.includes(idx)) {
        for (let k = idx + 1; k < plays.length; k++) {
          if (plays[k] === plays[idx]) {
            idx = k;
            break;
          }
        }
      }
      answer.push(idx);
      j++;
    }

  }

  return answer;
}
