function solution(nums) {
    const res = [];
    let ans = 0;

    combination(nums, [], 0, 0, 3);
    for (const nums of res) {
        if (isPrime(nums.reduce((acc, cur) => acc + cur, 0))) ans += 1;
    }
    return ans;

    // 1. 주어진 배열 중 3개 고르기
    function combination(arr, data, depth, idx, reach) {
        if (depth == reach) {
            res.push(data.slice());
            return;
        }
        for (let i = idx; arr.length - i >= reach - depth; i++) {
            data[depth] = arr[i];
            combination(arr, data, depth + 1, i + 1, reach);
        }
    }

    // 2. 소수판별
    function isPrime(n) {
        if (n === 2) return true;
        for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
}

solution([1, 2, 3, 4]);