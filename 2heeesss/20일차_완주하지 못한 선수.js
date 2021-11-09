// 풀이 1
function solution(participant, completion) {
    const marathonMap = new Map();
    for (const man of participant) {
        if (!marathonMap.get(man)) marathonMap.set(man, 1);
        else marathonMap.set(man, marathonMap.get(man) + 1);
    }
    for (const man of completion) {
        marathonMap.set(man, marathonMap.get(man) - 1);
    }
    for (const man of marathonMap) {
        if (man[1] > 0) return man[0]
    }
}

// 풀이 1 - 리팩토링 
function solution(participant, completion) {
    const marathonMap = new Map();
    for (const man of participant) {
        !!marathonMap.get(man) ? marathonMap.set(man, marathonMap.get(man) + 1) : marathonMap.set(man, 1)
    }
    for (const man of completion) {
        marathonMap.set(man, marathonMap.get(man) - 1);
    }
    for (const man of marathonMap) {
        if (man[1] > 0) return man[0]
    }
}