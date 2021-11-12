// 프로그래머스 레벨 1
// 행렬의 덧셈

function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]));
}
