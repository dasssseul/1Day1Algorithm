function solution(n, lost, reserve) {
    const students = new Array(n + 2).fill(1);

    lost.forEach((val) => (students[val] -= 1));
    reserve.forEach((val) => (students[val] += 1));

    students.forEach((val, i) => {
        if (val < 1) {
            if (students[i - 1] > 1) {
                students[i - 1] -= 1;
                students[i] += 1;
            } else if (students[i + 1] > 1) {
                students[i + 1] -= 1;
                students[i] += 1;
            }
        }
    });

    return students.reduce((acc, cur) => (cur > 0 ? acc + 1 : acc)) - 2;
    // 두가지 리턴방법
    // return students.filter((val) => val > 0).length - 2;
}
