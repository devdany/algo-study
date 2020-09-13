function solution(operations) {
  const queue = [];
  operations.forEach(v => {
      let [operation, data] = v.split(' ');
      data = parseInt(data);
      switch(operation) {
          case 'I':
              queue.push(data);
              queue.sort((a, b) => a - b);
              break;
          case 'D':
              data === 1 ? queue.pop() : queue.shift();
      }
  });
  return queue.length === 0 ? [0, 0] : [queue.pop(), queue.shift()];
}

export default solution;