// 백준 15649번_N과 M(1)

// 숫자 입력을 받기 위한 fs 모듈 사용
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const numbers = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((i) => parseInt(i));

const array = new Array(numbers[0]);
let output = [];
let result = '';

function dfs(cnt) {
  if (cnt === numbers[1]) {
    result += `${output.join(' ')}\n`;
    // console.log(result);
    return;
  }

  for (let i = 0; i < numbers[0]; i++) {
    if (array[i] === true) continue;
    array[i] = true;
    output.push(i + 1);
    // console.log(`첫번째 ${output}`);
    dfs(cnt + 1);
    output.pop();
    // console.log(`두번째 ${output}`);
    array[i] = false;
  }
}

dfs(0);
console.log(result.trim());
