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
}

export const diskController = (jobs) => {
  //작업 크기 저장 변수
  let jobsSize = jobs.length;

  //시작 오름차순, 시작이 같으면 길이 오름차순
  jobs.sort((prev, next) => (prev[0] === next[0] ? prev[1] - next[1] : prev[0] - next[0]));

  //작업 대기 큐는 길이 오름차순
  const waitingJobs = new PriorityQueue((prev, next) => {
    return next[1] - prev[1] > 0;
  });

  //현재 시간변수
  let currentTime = 0;
  // 걸린 시간 합
  let answer = 0;

  //jobs의 모든 작업을 대기 큐로 넣음
  while (jobs.length !== 0) {
    
    //현재 시간에서 시작 가능한 작업을 queue에 넣는다.
    while (jobs.length !== 0 && currentTime >= jobs[0][0]) {
      waitingJobs.enqueue(jobs.shift());
    }

    //시작 가능한 작업이 없으면 현재 시간을 가장 앞의 작업의 시작 시간으로 바꿔준다.
    if (waitingJobs.size === 0) {
      currentTime = jobs[0][0];
      continue;
    }

    [answer, currentTime] = calJobTime(waitingJobs, answer, currentTime);
  }

  //작업 대기 큐에 남은 작업을 계산한다.
  let size = waitingJobs.size;
  for (let i = 0; i < size; i++) {
    [answer, currentTime] = calJobTime(waitingJobs, answer, currentTime);
  }

  return Math.floor(answer / jobsSize);
};

//가장 앞에 있는 작업을 빼서 걸린 시간과 현재 시간을 계산
const calJobTime = (waitingJobs, answer, currentTime) => {
  let job = waitingJobs.dequeue();
  answer += currentTime - job[0] + job[1];
  currentTime += job[1];
  return [answer, currentTime];
};
