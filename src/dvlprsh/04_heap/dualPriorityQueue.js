function solution(operations) {
  const queue = [];
  operations.forEach(v => {
      let [operation, data] = v.split(' ');
      data = parseInt(data);
      switch(operation) {
          case 'I':
              queue.push(data);
              break;
          case 'D':
              data === 1 ? queue.pop() : queue.shift();
      }
      queue.sort((a, b) => a - b);
  });
  return queue.length === 0 ? [0, 0] : [queue.pop(), queue.shift()];
}

export default solution;