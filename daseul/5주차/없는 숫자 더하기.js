// 프로그래머스 레벨 1
// 없는 숫자 더하기 

// 풀이 1

function solution(numbers) {
    let answer = 0
    for(let i = 0; i < 10; i++){
        if(!numbers.includes(i)){
            answer+=i
        }
    }
    return answer
}

// 풀이 2. 굳이 굳이 filter, reduce 써보자면...

function solution(numbers) {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return array.filter((num) => !numbers.includes(num)).reduce((acc, curr) => {
        return acc + curr
    })
}