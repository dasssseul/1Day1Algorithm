// 프로그래머스 레벨 1
// 숫자 문자열과 영단어 

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let splitArr = []
    for(let i = 0; i < numbers.length; i++){
        if(s.includes(numbers[i])){
             splitArr = s.split(numbers[i])
                s = splitArr.join(i)
            }
        }

    return parseInt(s)
}