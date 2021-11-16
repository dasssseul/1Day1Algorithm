// 프로그래머스 레벨 1
// 평균 구하기
function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}
