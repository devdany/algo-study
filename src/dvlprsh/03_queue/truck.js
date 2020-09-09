function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const passed_trucks = [];
  const bridge = Array.from({ length: `${bridge_length}` }, (v, i) => 0);
  const trucks_num = truck_weights.length;
  while (passed_trucks.length !== trucks_num){
      answer ++;
      const passed_truck = bridge.shift();
      passed_truck ? passed_trucks.push(passed_truck) : undefined;
      if (bridge.reduce((a, v) => a + v, 0) + truck_weights[0] > weight) {
          bridge.push(0);
          continue;
      }
      const truck = truck_weights.shift();
      truck ? bridge.push(truck) : bridge.push(0)
  }
  return answer;
}