const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const list = input.map(height => parseInt(height.trim()));

const solution = function (heights) {
    const subList = [];

    // 모든 경우의 수 탐색
    for (let i = 0, len = heights.length - 1; i < len; i++) {
        for (let j = i + 1, len = heights.length; j < len; j++) {
            // 9명 난쟁이 중 2명 뽑기
            // 2명을 뺀 나머지 7명을 subList에 push
            subList.push(heights.filter((val, index) => {
                if (index !== i && index !== j) return val;
            }, []));
        }
    }


    for (const x of subList) {
        // sublist를 순회하며, 배열의 합이 100이라면 return
        if (x.reduce((acc, cur) => acc + cur) === 100) {
            return x
                .sort((x, y) => x - y)
                .join('\n');
        }
    }
}


console.log(solution(list));