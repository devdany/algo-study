/**
 * (neighborNodes - costs로 부터 섬 번호 별 연결 가능한 섬 번호 매핑을 저장하는 2차원 배열)
 * neighborNodes: [[이웃 노드 인덱스, 다리 건설 비용]]
 * linkedNode: 연결이 완료된 노드
 * candidates: [이웃 노드 인덱스, 다리 건설 비용] (linkedNode에서 이동할 수 있는 후보 노드)
 */
function solution(n, costs) {
  let answer = 0;
  const linkedNode = new Set([]);
  const neighborNodes = Array.from({ length: n}, () => []);
  let candidates = [];

  costs.forEach(v => {
      const [n1, n2, cost] = v;
      neighborNodes[n1].push([n2, cost]);
      neighborNodes[n2].push([n1, cost]);
  });

  costs.sort((a, b) => a[2] - b[2]);
  const [n1, n2, cost] = costs.shift();
  linkedNode.add(n1);
  linkedNode.add(n2);
  candidates.push(...neighborNodes[n2]);
  candidates.push(...neighborNodes[n1]);
  answer += cost;

  while(linkedNode.size < n) {
      candidates = candidates
          .filter(v => !linkedNode.has(v[0]))
          .sort((a, b) => a[1] - b[1]);

      const [n, cost] = candidates.shift();
      linkedNode.add(n);
      candidates.push(...neighborNodes[n]);
      answer += cost;
  }
  return answer;
}

export default solution;