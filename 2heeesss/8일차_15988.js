const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const input1 = parseInt(input.shift());
const input2 = input.map(val => parseInt(val));

// 시도 1 - 실패(시간초과)
const solution = function (T, nums) {
    for (const num of nums) {
        // n까지 배열만들기
        let res = new Array(num + 1).fill(0);
        res[0] = 1;
        // 0부터 n까지 순회
        // 0은 1로 시작, 나머지는 0저장
        for (let i = 1, len = res.length; i < len; i++) {
            // i가 1,2,3일 경우
            if (i === 0) continue;
            if (i < 4) {
                let [beforeOneSpace, beforeTwoSpace, beforeThreeSpace] = [0, 0, 0];
                // 경우1. 0 < i-1
                if (i - 1 >= 0) beforeOneSpace = res[i - 1];
                // 경우2. 0 < i-2
                if (i - 2 >= 0) beforeTwoSpace = res[i - 2];
                // 경우3. 0 < i-3
                if (i - 3 >= 0) beforeThreeSpace = res[i - 3];
                // 위 경우가 해당될때 값 저장
                res[i] = beforeOneSpace + beforeTwoSpace + beforeThreeSpace;
                continue;
            }
            // i가 1,2,3이 아닐경우
            // i === i-1 + i-2 + i-3 더한 값
            res[i] = (res[i - 1] + res[i - 2] + res[i - 3]) % 1000000009;
        }
        if (num === 0) {
            console.log(0);
        } else {
            console.log(res[num]);
        }
    }
}
// solution(input1, input2);



// 시도2 - 통과
const solution2 = function (T, nums) {
    maxNum = Math.max(...nums);
    let res = new Array(maxNum + 1).fill(0);
    res[0] = 1;
    for (let i = 1, len = maxNum + 1; i < len; i++) {
        if (i < 4) {
            let [beforeOneSpace, beforeTwoSpace, beforeThreeSpace] = [0, 0, 0];
            if (i - 1 >= 0) beforeOneSpace = res[i - 1];
            if (i - 2 >= 0) beforeTwoSpace = res[i - 2];
            if (i - 3 >= 0) beforeThreeSpace = res[i - 3];
            res[i] = (beforeOneSpace + beforeTwoSpace + beforeThreeSpace) % 1000000009;
            continue;
        }
        res[i] = (res[i - 1] + res[i - 2] + res[i - 3]) % 1000000009;
    }
    for (const num of nums) {
        console.log(res[num]);
    }

}
//solution2(input1, input2);



// 시도2 - 리팩토링
const solution3 = function (T, nums) {
    maxNum = Math.max(...nums);
    let res = new Array(maxNum + 1).fill(0);
    res[0] = 1;
    [res[1], res[2], res[3]] = [1, 2, 4];
    for (let i = 4, len = maxNum + 1; i < len; i++) {
        res[i] = (res[i - 1] + res[i - 2] + res[i - 3]) % 1000000009;
    }

    nums.forEach(num => console.log(res[num]));
}
solution3(input1, input2);
