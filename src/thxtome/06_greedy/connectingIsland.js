export const connectingIsland = (n, costs) => {
  //비용 오름차순 정렬
  costs.sort((prev, next) => {
    return prev[2] - next[2];
  });

  //cycletable 생성
  const island = Array(n)
    .fill(0)
    .map((e, i) => i);

  //총 비용
  let totalCost = 0;

  for (let i = 0; i < costs.length; i++) {
    //전부연결되면 return
    if (allConnected(island) !== false) {
      return totalCost;
    }

    let cost = costs[i];
    let island1 = island[cost[0]];
    let island2 = island[cost[1]];

    if (island1 === island2) {
      continue;
    }

    let parent;
    let child;

    //낮은 번호에 연결
    island1 < island2 ? ([parent, child] = [island1, island2]) : ([parent, child] = [island2, island1]);

    //자식들도 같이 변경
    for (let i = 0; i < island.length; i++) {
      if (island[i] === child) {
        island[i] = parent;
      }
    }

    totalCost += cost[2];
  }

  return totalCost;
};

//전부 연결됐는지 확인
const allConnected = (array) => {
  return array.reduce((a, v) => {
    if (a !== v) {
      return false;
    } else {
      return v;
    }
  });
};
