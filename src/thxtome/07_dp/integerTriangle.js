export const integerTriangle = (triangle) => {
  //매층마다 반복
  for (let layer = triangle.length - 1; layer >= 0; layer--) {
    if (layer == 0) break;

    let newLayer = new Array();

    //현재층의 블럭 중 마지막 블럭을 제외하고 최대값을 더해서 갱신
    for (let block = 0; block < triangle[layer].length - 1; block++) {
      newLayer[block] = Math.max(triangle[layer][block], triangle[layer][block + 1]) + triangle[layer - 1][block];
    }
    triangle[layer - 1] = newLayer;
  }
  //최댓값을 구함
  return triangle[0][0];
};
