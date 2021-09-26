// 백준 1463번_1로 만들기

// 숫자 입력을 받기 위한 fs 모듈 사용
const fs = require('fs');
const input = fs.readFileSync('3주차/test.txt').toString().split(' ');
const number = Number(input);

const solution = (number) => {
  const times = new Array(number + 1).fill(0);
  for (let i = 2; i < number + 1; i++) {
    // 현재 수에서 1을 빼는 경우
    times[i] = times[i - 1] + 1;
    // 현재 수가 3으로 나눠지는 경우
    if (!(i % 3)) {
      times[i] = Math.min(times[i], times[parseInt(i / 3)] + 1);
    }
    // 현재 수가 2로 나눠지는 경우
    if (!(i % 2)) {
      times[i] = Math.min(times[i], times[parseInt(i / 2)] + 1);
    }
  }
  console.log(times[number]);
};

solution(number);
