// 백준 2309번_일곱 난쟁이

// 숫자 입력을 받기 위한 fs 모듈 사용
const numbers = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((i) => parseInt(i));

const solution = (numbers) => {
  const totalHeight = numbers.reduce((acc, curr) => acc + curr);
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sevenPeopleHeight = totalHeight - numbers[i] - numbers[j];
      if (sevenPeopleHeight === 100) {
        return numbers
          .filter((number) => number !== numbers[i] && number !== numbers[j])
          .sort((a, b) => a - b)
          .join('\n');
      }
    }
  }
};

console.log(solution(numbers));
