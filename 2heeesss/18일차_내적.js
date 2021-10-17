// 풀이 1
function solution(a, b) {
    let res = 0;
    a.forEach((val, i) => res += val * b[i]);
    return res;
}
// 풀이 2
function solution(a, b) {
    return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}