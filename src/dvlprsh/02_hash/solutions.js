// Time O(N^2)
/**
 * 
 * genre_play : { 장르: 장르 별 총 재생시간 }
 * genre_rank: [[ 장르, 장르 별 총 재생시간 ]]
 * records : [ 고유번호, 장르, 재생시간 ]
 * filtered_record : records 중 장르별 filter한 배열
 */
function solution(genres, plays) {
  const answer = [];
  const genre_play = {};
  const records = genres.map((v, i) => {
      !!genre_play[v] ? genre_play[v] += plays[i] : genre_play[v] = plays[i];
      return [i, v, plays[i]];
  });
  //장르 별 재생시간을 내림차순 정렬하기 위해 genre_play 객체를 2차원 배열로 만든 후 정렬
  const genre_rank = Object.keys(genre_play).map(key => [String(key), genre_play[key]]);
  genre_rank.sort((a, b) => b[1] - a[1]);
  
  genre_rank.forEach(v => {
      const filtered_record = records.filter(record => record[1] === v[0]);
      //장르별로 필터링 한 후 재생시간 기준으로 내림차순 정렬, if 재생시간이 같은 곡이 존재한다면 고유 번호 기준 오름차순 정렬 => 길이 2가 되도록 자르기
      filtered_record.sort((a, b) => (b[2] === a[2] ? a[1] - b[1] : b[2] - a[2])).splice(2);
      answer.push(...filtered_record.map(v => v[0]))
  });

  return answer;
}

export default solution;