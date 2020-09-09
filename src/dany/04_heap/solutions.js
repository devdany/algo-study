class PriorityQueue {
  constructor() {
    this.size = 0
    this.heap = []
  }

  insert(value) {
    this.size ++
    this.heap[this.size] = value
    if (this.heap.length > 1) {
      let current = this.size
      let parent = Math.floor(current/2)
      while (this.size > 1 && this.heap[parent] < this.heap[current]) {
        this.swap(parent, current)
        current = parent
        parent = Math.floor(current/2)
      }
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  pop() {
    const root = this.heap[1]
    this.size --
    
    if (this.heap.length === 1) {
      return null
    }

    if (this.heap.length === 2) {
      return this.heap.splice(1, 1)
    }

    this.heap[1] = this.heap[this.heap.length-1]
    this.heap.splice(this.heap.length - 1)
    
    if (this.heap.length === 3) {
      if (this.heap[1] < this.heap[2]) {
        this.swap(1, 2)
      }
      return root
    }

    let current = 1
    let leftChildIndex = current * 2
    let rightChildIndex = current * 2 + 1

    while (
      this.heap[leftChildIndex] &&
      this.heap[rightChildIndex] &&
      (this.heap[current] < this.heap[leftChildIndex] || this.heap[current] < this.heap[rightChildIndex]) 
    ) {
      if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
        this.swap(current, leftChildIndex)
        current = leftChildIndex
      } else {
        this.swap(current, rightChildIndex)
        current = rightChildIndex
      }
      leftChildIndex = current * 2
      rightChildIndex = current * 2 + 1
    }

    if (!this.heap[rightChildIndex] && this.heap[leftChildIndex] > this.heap[current]) {
      this.swap(current, leftChildIndex)
    }
    
    return root
  }

  // 힙에서 제일 작은수를 필터하고 힙 재구성
  removeSmallest() {
    let min
    this.size = 0
    for (const val of this.heap) {
      if (!min) {
        min = val
        continue
      }

      if (min > val) {
        min = val
      }
    }
    const filtered = this.heap.filter((number) => number !== min)
    this.heap = []
    for (const val of filtered) {
      this.insert(val)
    }
    return min
  }
}

export const doublePriorityQueue = (operations) => {
  const priorityQueue = new PriorityQueue()
  let insertCnt = 0
  let deleteCnt = 0
  for (const operator of operations) {
    const [key, val] = operator.split(' ')
    if (key === 'I') {
      // insert
      priorityQueue.insert(Number(val))
      insertCnt ++
    } else {
      deleteCnt ++
      if (val === '1') {
        // max delete
        priorityQueue.pop()
      } else {
        priorityQueue.removeSmallest()
      }
    }
  }

  let answer = []

  if (insertCnt <= deleteCnt) {
    answer = [0, 0]
  } else {
    let min
    for (const val of priorityQueue.heap) {
      if (!min) {
        min = val
        continue
      }

      if (min > val) {
        min = val
      }
    }
    answer = [priorityQueue.heap[1], min]
  }
  return answer
} 