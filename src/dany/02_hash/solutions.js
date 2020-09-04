const getBigger2PlayCnt = (playCnts) => {
  playCnts.sort((a, b) => {
    return a.cnt < b.cnt ? 1 : a.cnt > b.cnt ? -1 : 0
  })
  return [playCnts[0], playCnts[1]]
}

// 시간복잡도 : O(6n + n log n + n + n) => O(n log n)
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

const getCombinations = (arr, selectNumber) => {
  const results = []
  
  // 1개씩 택할 때, 바로 모든 배열의 원소 return
  if (selectNumber === 1) {
    return arr.map((value) => [value])
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1) // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1) // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]) //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached) // 배열 spread syntax 로 모두다 push
  })

  return results
}

export const camouflage = (clothes) => {
  if (clothes.length === 0) {
    return 0
  }
  const hash = {}
  for (const [ name, type ] of clothes) {
    if (hash[type]) {
      hash[type] = [...hash[type], name]
    } else {
      hash[type] = [name]
    }
  }

  const hashArr = []
  for (const key in hash) {
    hashArr.push({ type: key, clothes: hash[key] })
  }

  const typeCnt = Object.keys(hash).length
  let result = 0
  for (let i = 1; i <= typeCnt; i++) {
    // hash 에서 i가지를 고르는 경우
    const picked = getCombinations(hashArr, i)
    for (let j = 0; j < picked.length; j++) {
      let clothCombination = 1
      for (let k = 0; k < picked[j].length; k++) {
        clothCombination = clothCombination * picked[j][k].clothes.length
      }
      result += clothCombination
    }
  }
  return result
} 