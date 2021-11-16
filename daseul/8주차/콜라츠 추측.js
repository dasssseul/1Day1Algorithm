// 프로그래머스 레벨 1
// 콜라츠 추측
function solution(num) {
  let answer = 0;
  while (num !== 1 && answer !== 500) {
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num /= 2;
    }
    answer += 1;
  }
  return num === 1 ? answer : -1;
}
