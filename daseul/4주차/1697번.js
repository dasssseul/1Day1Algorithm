const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const numbers = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((i) => parseInt(i));

const start = numbers[0]
const end = numbers[1]
const visited = new Array(100001).fill(false)

// 첫번째 방법_시간 초과 

function bfs(start){
    // 시작 위치와 걸린 시간 
    const q = [[start, 0]];
    visited[start] = true
    while(q.length){
        const [curr, time] = q.shift()
        if(curr === end){
            return time
        }
        // 아예 계산된 배열 만들어서 for문으로 돌리기 
        let newLoc = [[curr + 1, time + 1], [curr - 1, time + 1], [curr * 2, time + 1]]
        for(const loc of newLoc){
            if(loc[0] < 0 || loc[0] > 100000) continue;
            if(!visited[loc[0]]){
                q.push(loc);
                visited[loc[0]] = true;
            }
        }
    }
}

console.log(bfs(start))