// 프로그래머스 레벨 1
// 음양 더하기

function solution(absolutes, signs){
    return absolutes.reduce((acc, curr, idx) => {
        if(signs[idx]){
            return acc + curr
        }else{
            return acc - curr
        }
    }, 0)
}