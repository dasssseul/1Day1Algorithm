const filePath = process.platform === 'linux' ? '/dev/stdin' : '4주차/test.txt';
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
    while(q){
        const [curr, time] = q.shift()
        if(visited[curr]){
            continue
        }
        visited[curr] = true
        if(curr === end){
            return time
        }

        // 아예 계산된 배열 만들어서 for문으로 돌리기 
        let newLoc = [[curr + 1, time + 1], [curr - 1, time + 1], [curr * 2, time + 1]]
        for(const loc of newLoc){
            if(loc[0] <= 100000){
                q.push(loc)
            }
        }
    }
}

console.log(bfs(start))

// 두번째 방법_시간초과 

// 첫번째 방법과 입력받는 방식은 동일 
const bfs = (start) => {
    // 시작 위치와 걸린 시간 
    const q = [[start, 0]];
    while(q){
        const [curr, time] = q.shift()
        if(visited[curr]){
            continue
        }
        visited[curr] = true
        if(curr === end){
            // 콘솔로 바로 출력 및 break
            console.log(time)
            break
        }

        // 값마다 if문으로 확인
        if((curr + 1) <= 100000){
            q.push([curr + 1, time + 1])
        }
        if((curr - 1) >= 0){
            q.push([curr - 1, time + 1])
        }
        if((curr * 2) <= 100000){
            q.push([curr * 2, time + 1])
        }
    }
}

bfs(start)


// 3번째 방법_성공

// 입력받는 방식 변경 
const input = [];

const numbers = (str) => str.split(' ').map(Number);

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  // 즉시 실행 함수 이용..
  .on('close', function () {
    const [start, end] = numbers(input[0]);
    const visited = Array(100001).fill(false);

    const q = [[start, 0]];
    // q의 length로 조건 변경 
    while (q.length) {
      const [curr, time] = q.shift();
      if (visited[curr]) {
        continue;
      }

      visited[curr] = true;
      if (curr === end) {
        console.log(time);
        break;
      }

      if (curr * 2 <= 100000) {
        q.push([curr * 2, time + 1]);
      }
      if (curr + 1 <= 100000) {
        q.push([curr + 1, time + 1]);
      }
      if (curr - 1 >= 0) {
        q.push([curr - 1, time + 1]);
      }
    }
  });