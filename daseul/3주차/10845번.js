// 백준 10845번. 큐

// 숫자 입력을 받기 위한 fs 모듈 사용
const filePath = process.platform === 'linux' ? '/dev/stdin' : '3주차/test.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const values = input.slice(1).map((v) => v.split(' '));

const queue = new Array();
let answer = '';

const noValue = () => {
  return queue.length === 0;
};

const push = (v) => {
  queue.push(v);
};

const pop = () => {
  noValue() ? (answer += '-1\n') : (answer += queue.shift() + '\n');
};

const size = () => {
  answer += String(queue.length) + '\n';
};

const empty = () => {
  noValue() ? (answer += '1\n') : (answer += '0\n');
};

const front = () => {
  noValue() ? (answer += '-1\n') : (answer += queue[0] + '\n');
};

const back = () => {
  noValue() ? (answer += '-1\n') : (answer += queue[queue.length - 1] + '\n');
};

const solution = (calc, value) => {
  if (calc === 'push') {
    push(value);
  } else if (calc === 'pop') {
    pop();
  } else if (calc === 'size') {
    size();
  } else if (calc === 'empty') {
    empty();
  } else if (calc === 'front') {
    front();
  } else {
    back();
  }
};

values.forEach(([a, b]) => solution(a, b));
console.log(answer);
