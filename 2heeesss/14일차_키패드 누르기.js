// 첫번째 풀이
function solution(numbers, hand) {
    const touchByLeft = [1, 4, 7];
    const touchByRight = [3, 6, 9];
    // 숫자패드 좌표
    const numPad = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2], [3, 0], [3, 1], [3, 2]];
    // 현재 손가락 위치
    const currentLeft = ['*'];
    const currentRight = ['#'];
    let l, r, want, dl, dr;
    let ans = '';

    for (const num of numbers) {
        if (touchByLeft.includes(num)) {
            currentLeft.push(num);
            ans += 'L';
        } else if (touchByRight.includes(num)) {
            currentRight.push(num);
            ans += 'R';
        } else { // 가운데 숫자(2,5,8,0)일때
            // 왼손, 오른손 위치 구한다음, 원하는 숫자와의 거리 구하기
            l = numPad[findIndex(currentLeft[currentLeft.length - 1])];
            r = numPad[findIndex(currentRight[currentRight.length - 1])];
            want = numPad[findIndex(num)];
            dl = findDistance(l, want);
            dr = findDistance(r, want);

            if (dl < dr) {
                currentLeft.push(num);
                ans += 'L';
            } else if (dl > dr) {
                currentRight.push(num);
                ans += 'R';
            } else {
                if (hand === 'right') {
                    currentRight.push(num);
                    ans += 'R';
                } else {
                    currentLeft.push(num);
                    ans += 'L';
                }
            }
        }
    }
    return ans;

    function findIndex(num) {
        if (num === '*') {
            return 9;
        } else if (num === 0) {
            return 10;
        } else if (num === '#') {
            return 11;
        } else {
            return num - 1;
        }
    }
    function findDistance(start, end) {
        return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
    }
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));