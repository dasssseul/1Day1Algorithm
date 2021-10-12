// 프로그래머스 레벨 1
// 크레인 인형뽑기 게임

// 처음에 든 생각
// 행렬의 열과 행을 바꾸면 더 쉽게 풀 수 있을 것 같은데 
// reduce map으로 푸는 방식이 아직 이해가 안감ㅠㅠ


function solution(board, moves) {
    let basket = []
    let cnt = 0
    // y좌표를 기준으로 x좌표 0부터 하나씩 탐색
    for(const y of moves){
        for(let i=0; i < board.length; i++){
            const currDoll = board[i][y-1]
            // 만약 인형이 있는 칸을 만나면
            if(currDoll){
                // 꺼낸다는 의미
                board[i][y-1] = 0
                // 장바구니에 마지막에 담긴 요소와 같다면
                if(basket[basket.length-1] === currDoll){
                    // 꺼낸 후 cnt + 2
                    basket.pop()
                    cnt += 2
                }else{
                    basket.push(currDoll)
                }
                // 인형이 있는 한 칸만 확인하고 다음 칸을 탐색하지못하도록 break
                break
            }
        }
    }
    return cnt
}
