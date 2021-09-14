// 백준 9095번_1, 2, 3 더하기

// 숫자 입력을 받기 위한 fs 모듈 사용
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'daseul/2주차/test.txt';
const numbers = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((i) => parseInt(i));

// 정수 n은 양수이며 11보다 작다
const ways = new Array(11).fill(0);

// 초기값 설정
ways[1] = 1;
ways[2] = 2;
ways[3] = 4;

// 점화식
const countWays = (number) => {
  ways[number] = ways[number - 1] + ways[number - 2] + ways[number - 3];
};

// 각 값에 해당하는 ways구하기
for (let i = 4; i < 11; i++) {
  countWays(i);
}

// 테스트의 개수 제거
numbers.splice(0, 1);

// 결과 출력
console.log(numbers.map((idx) => ways[idx]).join('\n'));
