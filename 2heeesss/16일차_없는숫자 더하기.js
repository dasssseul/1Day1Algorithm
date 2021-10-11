// 풀이 1
function solution(numbers) {
    let result = 0;
    let subList = [];

    for (let i = 0; i < 10; i++) {
        subList = numbers.join().split(i);
        if (subList.length == 1) result += i;
    }

    return result;
}

// 풀이 2
function solution(numbers) {
    let result = 45;
    for (const num of numbers) {
        result -= num;
    }
    return result;
}