const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const solution = function (x) {
    let res = new Array(x);
    res[1] = 0;
    res[0] = 987654321; // 최솟값 저장할때 걸리도록 큰값 저장
    // 1부터 n까지 순회(빈 배열 만들어서)
    for (let i = 2; i <= x; i++) {
        let divideByTwo = 0;
        let divideByThree = 0;

        if (i % 2 === 0) divideByTwo = parseInt(i / 2);
        if (i % 3 === 0) divideByThree = parseInt(i / 3);
        // i번째값 === i-1번째 값 +1, i/2번째값+1, i/3번째값+1
        res[i] = Math.min(res[i - 1], res[divideByTwo], res[divideByThree]) + 1;
    }

    return res[x];
}

console.log(solution(parseInt(input[0])));