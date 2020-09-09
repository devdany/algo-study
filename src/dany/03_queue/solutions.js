export const truckInBridge = (bridge_length, weight, truck_weights) => {
  const waitTrucks = [...truck_weights] // 대기중인 트럭들
  const crossingTrucks = Array.from({ length: `${bridge_length}`}, () => null) // 건너고 있는 트럭들. index는 현재 트럭이 위치하고 있는 곳에 있을것임
  const crossedTrucks = [] // 건넌 트럭들

  // 다리 상태 배열 초기화
  let sec = 0 // 시간
  let currentTotalWeight = 0 // 현재 건너고 있는 트럭무게의 총합
  while (crossedTrucks.length !== truck_weights.length) {
    sec++

    // 도착한 트럭 넘겨주고
    const crossedTruck = crossingTrucks.shift()
    if (crossedTruck) {
      crossedTrucks.push(crossedTruck)
      // 다 건넜으면 빼줌
      currentTotalWeight -= crossedTruck
    }

    // 다리에 새로운 트럭을 올릴 수 있는지 확인
    const target = waitTrucks[0]
    // 현재 다리를 건너고 있는 트럭들의 무게와 올릴 트럭 무게 합이 다리가 견딜수 있는 무게보다 작으면 올린다
    if (target && currentTotalWeight + target <= weight) {
      waitTrucks.shift() //대기중인거 뺌
      crossingTrucks.push(target) 
      // 새로 올릴때 더해줌
      currentTotalWeight += target
    } else {
      // 한칸씩 밀어넣기 위해서 빈값 푸쉬
      crossingTrucks.push(null)
    }
  }
  return sec
}