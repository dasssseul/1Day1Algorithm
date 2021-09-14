const line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");


const testCase = parseInt(input[0]);
const nList = input
    .filter((val, i) => i !== 0)
    .map(val => parseInt(val));


const solution = function (t, nums) {
    nums.forEach(val => console.log(findCase(val)));
}

// 숫자 k 의 방법의 수는 k-1 + k-2 + k-3 각각의 방법의 수와 같다
function findCase(k) {
    if (k === 0) {
        return 0;
    } else if (k === 1) {
        return 1;
    } else if (k === 2) {
        return 2;
    } else if (k === 3) {
        return 4;
    }
    return findCase(k - 1) + findCase(k - 2) + findCase(k - 3);
}


solution(testCase, nList);