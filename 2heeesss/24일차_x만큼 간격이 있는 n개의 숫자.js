function solution(x, n) {
    return Array(n)
        .fill(0)
        .map((val, i) => x * (i + 1));
}
