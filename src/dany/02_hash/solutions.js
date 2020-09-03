const getBigger2PlayCnt = (playCnts) => {
  playCnts.sort((a, b) => {
    return a.cnt < b.cnt ? 1 : a.cnt > b.cnt ? -1 : 0
  })
  return [playCnts[0], playCnts[1]]
}

export const bestAlbum = (genres, plays) => {
  const playPerGenre = {}
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i]
    const currentPlayCount = playPerGenre[genre]
    if (!currentPlayCount) {
      playPerGenre[genre] = {
        playCnts: [{ id: i, cnt: plays[i] }],
        totalPlayCnt: plays[i]
      }
    } else {
      playPerGenre[genre].totalPlayCnt = playPerGenre[genre].totalPlayCnt + plays[i]
      playPerGenre[genre].playCnts = getBigger2PlayCnt([...playPerGenre[genre].playCnts, { id: i, cnt: plays[i] }])
    }
  }
  
  const results = []
  for (let genre in playPerGenre) {
    results.push(playPerGenre[genre])
  }

  results.sort((a, b) => {
    return a.totalPlayCnt < b.totalPlayCnt ? 1 : a.totalPlayCnt > b.totalPlayCnt ? -1 : 0
  })
  
  let answer = []
  
  for (const result of results) {
    answer = answer.concat(result.playCnts.map((playCnt) => playCnt.id))
  }

  return answer
}