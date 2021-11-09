// 프로그래머스 레벨 1
// 체육복

function solution(n, lost, reserve) {
  // 체육복 여분이 있는 학생이 도난 당했을 경우
  // 정렬하는 이유 모르겠슴...
  const setLost = lost
    .filter((person) => !reserve.includes(person))
    .sort((a, b) => a - b);
  const setReserve = reserve
    .filter((person) => !lost.includes(person))
    .sort((a, b) => a - b);

  // 여벌을 가진 학생의 번호 -1, +1을 했을 때 도난 당한 학생의 번호가 된다면
  // setLost에서 제거해주기
  for (let i of setReserve) {
    if (setLost.includes(i - 1)) {
      setLost.splice(setLost.indexOf(i - 1), 1);
    } else if (setLost.includes(i + 1)) {
      setLost.splice(setLost.indexOf(i + 1), 1);
    }
  }
  return n - setLost.length;
}
