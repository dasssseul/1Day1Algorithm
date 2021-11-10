// 프로그래머스 레벨 1
// 소수 만들기 

function isPrime(number){
    for(let i = 2; i < Math.floor(number**0.5)+1; i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}

function solution(numbers){
    const len = numbers.length
    let answer = 0
    for(let i = 0; i < len-2; i++){
        for(let j = i+1; j < len-1; j++){
            for(let k = j+1; k < len; k++){
                const sumNumbers = numbers[i] + numbers[j] + numbers[k]
                if(isPrime(sumNumbers)){
                    answer += 1
                }
            }
        }
    }
    return answer
}
