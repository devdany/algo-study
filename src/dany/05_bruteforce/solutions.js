export const carpet = (brown, yellow) => {
  for (let i = 3; i < brown/2; i++) {
    let needBrown = (i * 2) + 2
    let needYellow = i-2
    for (let j = 3; j <= i; j++) {
      if (j > 3) {
        needBrown += 2
        needYellow = needYellow + (i-2)
      }

      if (needBrown === brown && needYellow === yellow) {
        return [i, j]
      }
    }
  }
}