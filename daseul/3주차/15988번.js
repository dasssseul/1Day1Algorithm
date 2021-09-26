// 백준 15988번. 1, 2, 3 더하기 3

// 숫자 입력을 받기 위한 fs 모듈 사용
const filePath = process.platform === 'linux' ? '/dev/stdin' : '3주차/test.txt';
const numbers = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((i) => parseInt(i));

const ways = new Array(1000001).fill(0);
const countWays = (number) => {
  ways[number] =
    (ways[number - 1] + ways[number - 2] + ways[number - 3]) % 1000000009;
};

ways[1] = 1;
ways[2] = 2;
ways[3] = 4;

numbers.shift();
const maxNum = Math.max(...numbers);
for (let i = 4; i <= maxNum; i++) {
  countWays(i);
}

console.log(numbers.map((num) => ways[num]).join('\n'));
