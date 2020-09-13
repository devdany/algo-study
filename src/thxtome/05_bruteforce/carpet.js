export const carpet = (brown, yellow) => {
  //카펫의 둘레의 절반
  let halfOfRound = (brown + 4) / 2;

  return binarySearch(3, Math.floor(halfOfRound / 2), yellow, halfOfRound);
};

const binarySearch = (start, end, yellow, round) => {
  //높이와 너비를 구함
  let height = Math.floor((start + end) / 2);
  let width = round - height;

  //노란색의 개수
  let result = (height - 2) * (width - 2);

  if (result === yellow) {
    return [width, height];
  } else if (result < yellow) {
    return binarySearch(height + 1, end, yellow, round);
  } else {
    return binarySearch(start, height - 1, yellow, round);
  }
};
