// 프로그래머스 레벨 1
// 내적

function solution(a, b) {
    return a.reduce((acc, curr, i) => acc + (curr*=b[i]), 0);
};