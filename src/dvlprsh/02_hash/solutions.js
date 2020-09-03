function solution(genres, plays) {
  const answer = [];
  const genre_play = {};
  const records = genres.map((v, i) => {
      !!genre_play[v] ? genre_play[v] += plays[i] : genre_play[v] = plays[i] ;
      return [i, v, plays[i]];
  });
  
  const genre_rank = Object.keys(genre_play).map(key => [String(key), genre_play[key]]);
  genre_rank.sort((a, b) => b[1] - a[1]);
  
  genre_rank.forEach(v => {
      let filtered_record = records.filter(record => record[1] === v[0]);
      filtered_record.sort((a, b) => (b[2] === a[2] ? a[1] - b[1] : b[2] - a[2])).splice(2);
      answer.push(...filtered_record.map(v => v[0]))
  });

  return answer;
}

export default solution;