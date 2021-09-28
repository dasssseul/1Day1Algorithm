const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(val => parseInt(val));


const solution = function (n, k) {
    const visted = new Array(100001).fill(false);
    if (n === k) {
        console.log(0);
    } else {
        console.log(bfs(n, visted));
    }

    function bfs(v, visted) {
        const queue = [v]; // bfs탐색을 위한 배열
        const time = [0]; // bfs의 깊이(시간)을 위한 배열
        visted[v] = true;

        while (queue.length !== 0) {
            const node = queue.shift();
            const t = time.shift();
            if (node === k) return t;
            let subList = [node - 1, node + 1, node * 2];
            let subTime = [t + 1, t + 1, t + 1];
            for (let i = 0; i < 3; i++) {
                let val = subList[i];
                if (val < 0 || val > 100000) continue;
                if (!visted[val]) {
                    queue.push(val);
                    visted[val] = true;
                    time.push(subTime[i]);
                }
            }
        }
    }
}
solution(input[0], input[1]);