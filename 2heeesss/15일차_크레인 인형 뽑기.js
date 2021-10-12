// 풀이 1번
function solution(board, moves) {
    let result = 0;
    const newBoard = new Array();
    const stk = new Array();
    let subBoard = new Array();

    // 세로로 배열 바꾸기
    for (let i = 0, len = board.length; i < len; i++) {
        subBoard = [];
        for (let j = 0, len = board.length; j < len; j++) {
            if (board[j][i] !== 0) subBoard.push(board[j][i]);
        }
        newBoard.push(subBoard);
    }
    console.log(newBoard);
    // moves를 순회하며 stk에 쌓음
    for (const target of moves) {
        if (newBoard[target - 1].length == 0) continue;
        stk.push(newBoard[target - 1].shift());
        //쌓인 stk에서 최근 2개가 같으면 pop() 2번, result +2번
        check(stk.length);
    }

    function check(length) {
        if (length < 2) return;
        if (stk[length - 1] == stk[length - 2]) {
            stk.pop();
            stk.pop();
            result += 2;
            check(length - 2);
        }
    }
    return result;
}

// 풀이 리팩토링
// 10배 이상 시간 낮춤
function solution(board, moves) {
    let result = 0;
    const LEN = board.length;
    const stk = new Array();
    const arr = Array.from({ length: LEN }, () => []);
    let flatBoard = board
        .reverse()
        .flat()
        .forEach((val, i) => {
            if (val != 0) arr[i % LEN].push(val)
        });

    for (const target of moves) {
        if (arr[target - 1].length == 0) continue;
        stk.push(arr[target - 1].pop());
        check(stk.length);
    }

    function check(len) {
        if (len < 2) return;
        if (stk[len - 1] == stk[len - 2]) {
            stk.pop();
            stk.pop();
            result += 2;
            check(len - 2);
        }
    }
    return result;
}
