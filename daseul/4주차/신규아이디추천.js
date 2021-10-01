// 프로그래머스 레벨 1
// 신규 아이디 추천

function solution(new_id) {
    let answer = new_id
                 .toLowerCase()
                 .replace(/[^a-z0-9\-\_\.]/g, '')
                 .replace(/\.{2,}/g, '.')
                 .replace(/^\.|\.$/g, '')
                 .replace(/^$/, 'a')
                 .slice(0, 15)
                 .replace(/\.$/, '')
     const len = answer.length
     len < 3 ? answer += answer[len-1].repeat(3-len) : answer
 
     return answer
 }