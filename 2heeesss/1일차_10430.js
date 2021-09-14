const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const nums = input.map(val => parseInt(val));

const expression1 = (x, y, z) => (x + y) % z;
const expression2 = (x, y, z) => ((x % z) + (y % z)) % z;
const expression3 = (x, y, z) => (x * y) % z;
const expression4 = (x, y, z) => ((x % z) * (y % z)) % z;

const solution = function (A, B, C) {
    console.log(expression1(A, B, C));
    console.log(expression2(A, B, C));
    console.log(expression3(A, B, C));
    console.log(expression4(A, B, C));
}

solution(nums[0], nums[1], nums[2]);