// 프로그래머스 레벨 1
// x만큼 간격이 있는 n개의 숫자

// 풀이 1
function solution(x, n) {
  const answer = [];
  for (let i = 1; i < n + 1; i++) {
    answer.push(i * x);
  }
  return answer;
}

// 풀이 2
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((num, i) => num * (i + 1));
}
