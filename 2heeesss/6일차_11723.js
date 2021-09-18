const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const input1 = parseInt(input.shift());
const input2 = input.map(val => {
    let a = val.split(' ');
    return [a[0], parseInt(a[1])];
}, []);



// 방법1 Set자료형 가지고 확인하기
const solution = function (m, operatorList) {
    const numSet = new Set();

    const add = x => numSet.add(x);
    const remove = x => numSet.delete(x);
    const check = x => numSet.has(x) ? console.log(1) : console.log(0);
    const toggle = x => numSet.has(x) ? numSet.delete(x) : numSet.add(x);
    const all = () => {
        numSet.clear();
        for (let i = 1; i < 21; i++) {
            numSet.add(i);
        }
        return numSet;
    }
    const empty = () => numSet.clear();

    // 입력받은 배열 순회하며 동작 
    for (const operator of operatorList) {
        if (operator[0] === 'add') {
            add(operator[1]);
        } else if (operator[0] === 'remove') {
            remove(operator[1]);
        } else if (operator[0] === 'check') {
            check(operator[1]);
        } else if (operator[0] === 'toggle') {
            toggle(operator[1]);
        } else if (operator[0] === 'all') {
            all();
        } else {
            empty();
        }
    }
}

solution(input1, input2);

// 방법2 비트마스킹 방식으로 확인하기
// 이건 더 공부하고 풀어보기