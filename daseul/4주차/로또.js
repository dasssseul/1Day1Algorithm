// 프로그래머스 레벨 1
// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    const countZero = lottos.filter((num) => num === 0).length
    const sameNumber = lottos.filter((num) => win_nums.includes(num)).length

    return [rank[sameNumber+countZero], rank[sameNumber]]
}