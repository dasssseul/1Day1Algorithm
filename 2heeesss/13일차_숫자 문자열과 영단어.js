// 첫번째 풀이
function solution(s) {
    const alphabets = [/zero/g, /one/g, /two/g, /three/g, /four/g, /five/g, /six/g, /seven/g, /eight/g, /nine/g];

    for (let i = 0; i < 10; i++) {
        s = s.replace(alphabets[i], i);
    }

    return parseInt(s);
}


// 두번째 풀이
function solution(s) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < 10; i++) {
        s = s.split(num[i]).join(i);
    }
    return parseInt(s)
}