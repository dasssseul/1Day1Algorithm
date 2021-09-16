// 백준 10972번. 다음 순열

// 숫자 입력을 받기 위한 fs 모듈 사용
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'daseul/2주차/test.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 입력 받은 N 제외 후 다음 줄의 순열 배열로 변경
const strValues = input.slice(1)[0].split(' ');
const numbers = strValues.map((str) => parseInt(str));

let end = 0;
let hasNext = false;
let frontNumber;
let backNumber;
let nextNumber;

for (i = numbers.length - 1; i > 0; i--) {
  // 뒤에서 부터 비교 했을 때 인덱스가 낮은 수가 더 작다면
  if (numbers[i] > numbers[i - 1]) {
    end = i - 1;
    hasNext = true;
    break;
  }
}

if (hasNext) {
  for (let j = numbers.length - 1; j > end; j--) {
    // 뒤에서부터 numbers[end]보다 큰 수가 있다면
    if (numbers[end] < numbers[j]) {
      // 서로 Swap
      [numbers[end], numbers[j]] = [numbers[j], numbers[end]];
      break;
    }
  }
  // 처음부터 end 인덱스 까지의 수는 그대로
  frontNumber = [...numbers].slice(0, end + 1);
  // end 인덱스의 다음 수부터 뒤까지는 역순으로
  backNumber = [...numbers].slice(end + 1).reverse();
  // 그 두 배열을 합쳐 출력
  nextNumber = [...frontNumber, ...backNumber];
  console.log(nextNumber.join(' '));
  // 처음부터 끝까지 수가 내림차순을 만족한다면 -1 출력
} else {
  console.log(-1);
}
