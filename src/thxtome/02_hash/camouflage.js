//시간복잡도 : O(n)
export const camouflage = (clothes) => {
  // 종류별로 개수를 세어준다.
  let clothesByType = clothes.reduce((a, v) => {
    !!a[v[1]] ? (a[v[1]] += 1) : (a[v[1]] = 2);
    return a;
  }, {});

  // 종류별 옷의 개수를 모두 곱해 모든 경우의 수를 구하고 아무것도 안 입은 경우의 수 1을 빼준다.
  return (
    Object.values(clothesByType).reduce((a, v) => {
      return a * v;
    }, 1) - 1
  );
};
