function solution(arr1, arr2) {
    // 1. res 2차원 배열 생성, 요소의 개수는 arr1,2와 똑같이
    const res = Array.from({ length: arr1.length }, () => Array(arr1[0].length).fill(0));
    // 2. res map으로 순회하며 arr1, 2의 요소 합을 저장
    return res.map((arr, i) => arr.map((num, j) => arr1[i][j] + arr2[i][j]));
}
