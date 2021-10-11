function solution(absolutes, signs) {
    return absolutes.map((val, i) => signs[i] ? val : -val).reduce((acc, cur) => acc + cur);
}

function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => signs[i] ? acc + cur : acc - cur, 0);
}