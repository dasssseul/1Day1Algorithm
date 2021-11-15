// 프로그래머스 레벨 1
// 핸드폰 번호 가리기

function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.substr(-4);
}
