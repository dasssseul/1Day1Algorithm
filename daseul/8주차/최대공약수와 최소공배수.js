// 프로그래머스 레벨 1
// 최대공약수와 최소공배수

// 유클리드 호제법
function solution(n, m) {
  let maxVal = Math.max(n, m);
  let minVal = Math.min(n, m);
  while (minVal !== 0) {
    let temp = maxVal % minVal;
    maxVal = minVal;
    minVal = temp;
  }
  return [maxVal, (n * m) / maxVal];
}
