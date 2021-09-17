const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const input1 = parseInt(input[0]);
const input2 = input[1].split(' ').map(val => parseInt(val));


const solution = function (n, list) {
    const arr = new Array(n)
        .fill(0)
        .map((val, index) => index + 1);
    const res = [];
    let flag = 0;

    for (const num of arr) {
        dfs(arr, [], 1, num);
    }

    res.forEach((val, index) => {
        if (val.toString() === list.toString()) flag = index + 1;
    })
    flag === res.length ? console.log(-1) : console.log(res[flag]);

    function dfs(graph, visted, depth, current) {
        visted.push(current);
        if (depth === n) {
            res.push(visted.slice());
            return;
        }

        graph.forEach(val => {
            if (!visted.includes(val)) {
                dfs(graph, visted, depth + 1, val);
                visted.pop();
            }
        })
        return;
    }
}

solution(parseInt(input1), input2);