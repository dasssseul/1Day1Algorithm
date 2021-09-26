// 백준 11723번. 집합

// 숫자 입력을 받기 위한 fs 모듈 사용
const filePath = process.platform === 'linux' ? '/dev/stdin' : '2주차/test.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const values = input.slice(1).map((v) => v.split(' '));
// [ [ 'add', '1' ], [ 'add', '2' ], [ 'check', '1' ] ]

let s = new Set();

const all = () => {
  s.clear();
  for (let i = 1; i < 21; i++) {
    s.add(i);
  }
};

const solution = (calc, value) => {
  value = parseInt(value);
  if (calc === 'add') {
    s.add(value);
  } else if (calc === 'remove') {
    s.delete(value);
  } else if (calc === 'check') {
    s.has(value) ? console.log(1) : console.log(0);
  } else if (calc === 'toggle') {
    s.has(value) ? s.delete(value) : s.add(value);
  } else if (calc === 'all') {
    all();
  } else {
    s.clear();
  }
};

values.forEach(([a, b]) => solution(a, b));
