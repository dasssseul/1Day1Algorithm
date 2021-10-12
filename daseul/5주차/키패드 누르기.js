// 프로그래머스 레벨 1
// 키패드 누르기 

function solution(numbers, hand) {
    let answer = ''
    const keypadMap = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    }
    let currL = '*'
    let currR = '#'
    const dist = (a, b) => {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    }

    for(const num of numbers){
       if(num % 3 === 1) {
           answer += 'L'
           currL = num
       }else if(num !== 0 && num % 3 === 0) {
           answer += 'R'
           currR = num
       }else{
           if(dist(keypadMap[num], keypadMap[currL]) > dist(keypadMap[num], keypadMap[currR])){
               answer +='R'
               currR = num
           }else if(dist(keypadMap[num], keypadMap[currL]) < dist(keypadMap[num], keypadMap[currR])){
                answer += 'L'
                currL = num
           }else{
               if(hand === "left"){
                   answer += 'L'
                   currL = num
               }else{
                   answer +='R'
                   currR = num
               }
           }
       }
    }
    return answer
}
