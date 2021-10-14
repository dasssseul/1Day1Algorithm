// 프로그래머스 레벨 1
// 완주하지 못한 선수 

function solution(participant, completion){
    participant.sort()
    completion.sort()
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]) return participant[i]
    }
}
