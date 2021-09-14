// 비슷하지만 두가지 방법으로 풀어봤습니다.

// 1. 방문여부를 Array.prototype.includes()로 확인하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


const solution = function (n, m) {
    // nums배열에 1부터 n까지 요소 저장
    const nums = new Array(n)
        .fill(0)
        .map((val, index) => index + 1);

    // nums배열 요소 하나씩 순회하며 순열 함수에 접근
    for (let i = 0; i < n; i++) {
        permutation(nums, nums[i], m, []);
    }
}

function permutation(list, value, depth, visted) {
    // list: 1부터 n까지 저장된 배열
    // value: list의 i번째 요소
    // depth: 깊이
    // visted: 방문한 요소를 저장하는 배열

    // 방문한 요소 저장
    visted.push(value);
    if (depth === visted.length) {
        console.log(visted.join(' '));
        return;
    };
    // list의 요소를 순회하며, 
    // 방문한 요소를 저장하는 visted배열에 값이 없으면 다음 permutation 함수 실행
    for (let i = 0, len = list.length; i < len; i++) {
        if (!visted.includes(list[i])) {
            permutation(list, list[i], depth, visted);
            visted.pop();
        }
    }
}

solution(parseInt(input[0]), parseInt(input[1]));



// 2. 방문여부를 visted 배열을 사용해 true or false인지 확인하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


const solution = function (n, m) {
    const answer = [];
    let visted = [];
    const nums = new Array(n)
        .fill(0)
        .map((val, index) => index + 1);


    for (let i = 0; i < n; i++) {
        visted = new Array(n).fill(false);
        permutation(nums, i, 1, visted, []);
    }


    function permutation(list, currentIndex, depth, visted, result) {
        // 현재 방문한 요소가 true로 바꾸기
        visted[currentIndex] = true;
        // 결과를 저장할 sub list인 result에 현재 방문 요소를 push
        result.push(list[currentIndex]);

        if (depth === m) {
            // 저장된 sub list에서 값을 복사해서 answer 배열에 push
            // result를 그냥 push했을경우 깊은 복사가 일어나 뒤에 pop()했을때
            answer.push(result.slice());
            return;
        };
        for (let i = 0, len = list.length; i < len; i++) {
            if (!visted[i]) {
                permutation(list, i, depth + 1, visted, result);
                visted[i] = false;
                result.pop();
            }
        }
    }
    for (const nums of answer) {
        console.log(nums.join(' '));
    }
}


solution(parseInt(input[0]), parseInt(input[1]));