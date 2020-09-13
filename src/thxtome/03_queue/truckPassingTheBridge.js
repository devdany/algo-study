class Bridge {
  constructor(length, maxWeight) {
    this.length = length;
    this.maxWeight = maxWeight;
    this.trucks = new Array();
    this.currentWeight = 0;
    this.passedTime = 0;
  }

  //트럭을 넣어줌
  enterTruck(weight) {
    //다리의 현재 무게에 추가
    this.currentWeight += weight;
    this.trucks.push({ weight, location: 0 });

    //모든 트럭 위치 1추가
    this.trucks.forEach((truck) => {
      truck.location += 1;
    });

    //시간 1 추가
    this.passedTime += 1;
  }

  //첫번째 트럭을 뺌
  leaveTruck() {
    const { weight, location } = this.trucks.shift();
    this.currentWeight -= weight;

    //첫번째 트럭이 빠지는데 필요한 이동값
    let move = this.length - location;

    if (move < 0) {
      return;
    }

    //이동값만큼 다른 트럭의 위치를 옮김
    this.trucks.forEach((truck) => {
      truck.location += move;
    });

    //이동값만큼 시간 추가
    this.passedTime += move;
  }

  //총 무게가 넘는지 검사
  hasEnoughWeight(weight) {
    return this.currentWeight + weight <= this.maxWeight;
  }
}

export const truckPassingTheBridge = (bridgeLength, weight, truckWeights) => {
  const bridge = new Bridge(bridgeLength, weight);

  //대기중인 트럭이 없을때까지
  while (truckWeights.length !== 0) {
    //넣을 수 있으면 넣고 못 넣으면 맨 앞의 트럭을 뺌
    if (bridge.hasEnoughWeight(truckWeights[0])) {
      bridge.enterTruck(truckWeights.shift());
    } else {
      bridge.leaveTruck();
    }
  }

  //마지막 트럭이 들어간 시간 + 나오는데 걸리는 시간
  return bridge.passedTime + bridge.length;
};
