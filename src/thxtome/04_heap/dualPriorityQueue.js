//우선 순위 큐 구현
class PriorityQueue {
  constructor(comparator) {
    this.queue = [];
    this.size = 0;
    this.comparator = comparator;
  }

  enqueue(item) {
    this.size++;
    let i = this.size;
    while (i > 1 && this.comparator(item, this.queue[Math.floor(i / 2)])) {
      this.queue[i] = this.queue[Math.floor(i / 2)];
      i = Math.floor(i / 2);
    }
    this.queue[i] = item;
  }

  dequeue() {
    let remove = this.queue[1];
    this.queue[1] = this.queue.pop();
    this.size--;

    let parent = 1;
    let child = 2;

    while (child <= this.size) {
      if (this.queue[child + 1] && !this.comparator(this.queue[child], this.queue[child + 1])) {
        child += 1;
      }

      if (this.comparator(this.queue[parent], this.queue[child])) {
        break;
      }

      let temp = this.queue[child];
      this.queue[child] = this.queue[parent];
      this.queue[parent] = temp;

      parent = child;
      child = parent * 2;
    }

    return remove;
  }

  reset() {
    this.queue = [];
    this.size = 0;
  }
}

export const dualPriorityQueue = (operations) => {
  //최대큐
  const maxPq = new PriorityQueue((prev, next) => {
    return prev - next > 0;
  });

  //최소큐
  const minPq = new PriorityQueue((prev, next) => {
    return next - prev > 0;
  });

  let input = 0;
  let output = 0;

  operations.forEach((operation) => {
    //명령어 분리
    let [command, value] = operation.split(" ");

    //값 삽입
    if (command === "I") {
      maxPq.enqueue(Number(value));
      minPq.enqueue(Number(value));
      input++;
      return;
    }

    //아웃풋이 인풋과 같거나 많은 경우 양쪽 큐 리셋
    if (input <= ++output) {
      maxPq.reset();
      minPq.reset();
      [input, output] = [0, 0];
      return;
    }

    //최대값과 최소값이 같은 경우 양쪽 큐에서 모두 삭제
    if (maxPq.queue[1] === minPq.queue[1]) {
      maxPq.dequeue();
      minPq.dequeue();
      return;
    }

    //명령에 따라 최소값 최대값 삭제
    if (Number(value) === 1) {
      maxPq.dequeue();
    } else {
      minPq.dequeue();
    }
  });

  if (maxPq.size === 0) {
    return [0, 0];
  }

  return [maxPq.dequeue(), minPq.dequeue()];
};
