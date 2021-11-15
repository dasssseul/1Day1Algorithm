function solution(x) {
    return !(
        x %
        x
            .toString()
            .split("")
            .reduce((acc, cur) => acc + +cur, 0)
    );
}
