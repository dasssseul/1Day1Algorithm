// 백준 10430번

// 숫자 입력을 받기 위한 fs 모듈 사용_희승이한테 배움
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let numbers = input.map((num) => parseInt(num));

const calculate1 = (a, b, c) => (a + b) % c;
const calculate2 = (a, b, c) => ((a % c) + (b % c)) % c;
const calculate3 = (a, b, c) => (a * b) % c;
const calculate4 = (a, b, c) => ((a % c) * (b % c)) % c;

const solution = (a, b, c) => {
  console.log(calculate1(a, b, c));
  console.log(calculate2(a, b, c));
  console.log(calculate3(a, b, c));
  console.log(calculate4(a, b, c));
};

solution(numbers[0], numbers[1], numbers[2]);
