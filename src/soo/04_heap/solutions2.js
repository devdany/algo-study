class Heap {
  constructor() {
    this.heap = [];
  }

  pop() {
    this.heap.pop();
  }

  insert(value) {
    this.heap.push(parseInt(value, 10));
    this.shiftUp(this.heap.length - 1, this.heap);
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.shiftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }

  get getHeap() {
    return this.heap;
  }
}

class MinHeap extends Heap {
  shiftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(idxToSwap, currentIdx, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1
      } else {
        return;
      }
    }
  }

  shiftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

}

class MaxHeap extends Heap {
  shiftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] > heap[currentIdx]) {
        this.swap(idxToSwap, currentIdx, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1
      } else {
        return;
      }
    }
  }

  shiftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] > heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
}

function solution(operations) {
  const minPrioirityQueue = new MinHeap();
  const maxPrioirityQueue = new MaxHeap();

  for (const operation of operations) {
    const [command, value] = operation.split(' ');
    if (command === 'I') {
      minPrioirityQueue.insert(value);
      maxPrioirityQueue.insert(value);
    } else if (command === 'D') {
      if (value > 0) {
        maxPrioirityQueue.remove();
        minPrioirityQueue.pop();
      } else {
        minPrioirityQueue.remove();
        maxPrioirityQueue.pop();
      }

    }
  }

  if (maxPrioirityQueue.getHeap.length && minPrioirityQueue.getHeap.length) {
    return [maxPrioirityQueue.remove(), minPrioirityQueue.remove()]
  } else {
    return [0, 0]
  }

}
