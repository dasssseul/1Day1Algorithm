// 프로그래머스 레벨 1
// 하샤드수
function solution(x) {
  let num = String(x)
    .split('')
    .reduce((acc, curr) => +acc + +curr);
  return !(x % num);
}
