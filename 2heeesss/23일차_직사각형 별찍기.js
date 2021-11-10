// 풀이 1
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const row = +n[0];
    const column = +n[1];
    let rowStar = "";
    let res = "";

    for (let i = 0; i < row; i++) {
        rowStar += "*";
    }

    for (let j = 0; j < column; j++) {
        res += rowStar + "\n";
    }

    console.log(res);
});

// 풀이 2
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const row = +n[0],
        column = +n[1];

    const res = `${"*".repeat(row)}
`.repeat(column);

    console.log(res);
});
