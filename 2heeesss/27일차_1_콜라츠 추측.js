function solution(num) {
  let cnt = 0;
  while (cnt < 500) {
    if (num === 1) return cnt;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    cnt += 1;
  }
  return -1;
}
