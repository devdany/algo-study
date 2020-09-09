function solution(bridge_length, weight, truck_weights) {
  const bridge = [];
  let answer = 1;

  while(bridge.length || truck_weights.length) {
    // bridge 0번째의 끝나는 시간이 answer와 같으면 bridge의 0번째를 제거 (answer가 time)
    if (bridge.length && bridge[0].finish_time === answer) bridge.splice(0, 1);

    const sum = bridge.reduce((acc, cur) => acc + cur.weight, 0);
    const truck = truck_weights[0];

    // bridge에 있는 원소의 합과 truck의 무게를 더해서 weight와 같거나 작으면,
    if (sum + truck <= weight) {
      // bridge에 푸시한다 (끝나는 시간을 넣는이유는, 다리 길이만큼 time이 더해져야 하니까)
      bridge.push({
        finish_time: answer + bridge_length,
        weight: truck_weights.shift()
      });
    }

    answer++;
  }

  // 마지막에 -1를 하는이유는, 마지막 끝나는 시간이랑 맞춰 bridge를 제거했는데, answer 밑에 있어서 한번 더 돌아서 answer++가 되므로 -1을 삭제함
  return answer - 1;
}
