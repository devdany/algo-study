function getDuplicatedJobs(jobs, nextTime){
  const duplicated = jobs.filter(v => v[0] < nextTime);
  jobs.splice(0, duplicated.length);
  return duplicated;
}
function solution(jobs) {
  let processTimes = 0;
  let nextTime = 0;
  let duplicatedJobs = [];
  const jobsNum = jobs.length;
  let next;

  while (jobs.length > 0) {
      jobs.sort((a, b) => a[0] === b[0]? a[1] - b[1] : a[0] - b[0]);
      next = jobs.shift();
      nextTime = next[0] + next[1];
      processTimes += next[1];
      duplicatedJobs = duplicatedJobs.concat(getDuplicatedJobs(jobs, nextTime));
      
      while(duplicatedJobs.length > 0) {
          duplicatedJobs = duplicatedJobs
              .sort((a, b) => a[1] - b[1]);
          next = duplicatedJobs.shift();
          processTimes += (nextTime - next[0] + next[1]);
          nextTime += next[1];
          duplicatedJobs = duplicatedJobs.concat(getDuplicatedJobs(jobs, nextTime));
      }
  }
  return parseInt(processTimes/jobsNum);
}

export default solution;