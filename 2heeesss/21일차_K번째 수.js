// 풀이1
function solution(array, commands) {
    const res = [];

    for (const cmd of commands) {
        res.push(array
            .slice(cmd[0] - 1, cmd[1])
            .sort((a, b) => a - b)[cmd[2] - 1]);
    }
    return res;
}

// 풀이2
function solution(array, commands) {
    return commands.map(v => array
        .slice(v[0] - 1, v[1])
        .sort((a, b) => a - b)[v[2] - 1]
    );
}