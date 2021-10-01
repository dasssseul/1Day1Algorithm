// 첫번째 풀이
function solution(new_id) {
    var answer = '';

    const check = /[a-z\_\-\.0-9]/;
    const checkDoubleDot = /\.\.$/

    let b = '';
    const a = new_id
        .toLowerCase()
        .split('')
        .filter(value => check.test(value))
        .reduce((acc, cur) => {
            return checkDoubleDot.test(acc + cur) ? acc : acc + cur;
        }, '');
    if (a.startsWith('\.')) b = a.slice(1, a.length);
    else b = a;

    if (b.endsWith('\.')) b = b.slice(0, b.length - 1);

    if (b.length === 0) b = 'a';
    else if (b.length > 15) {
        b = b.slice(0, 15)
        if (b.endsWith('\.')) b = b.slice(0, 14);
    };

    if (b.length < 3) {
        let v = b[b.length - 1]
        while (b.length !== 3) {
            b = b + v;
        }
    }


    return b;
}

// 두번째 풀이
function solution(new_id) {

    const res = new_id
        .toLowerCase()
        .replace(/[^0-9a-z\-\_\.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '')
        .replace(/^$/, 'a')
        .slice(0, 15)
        .replace(/\.$/, '');

    const LEN = res.length
    return LEN < 3 ? res + res[LEN - 1].repeat(3 - LEN) : res;
}