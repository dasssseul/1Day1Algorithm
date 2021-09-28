const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/lee/Desktop/Education/Problem-Solving-with-JS/BOJ/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const input1 = parseInt(input.shift());
const input2 = input
    .map(val => val.split(' '))
    .map(val => {
        if (val[0] === 'push') return [val[0], parseInt(val[1])];
        return val;
    });


// 첫번째 풀이 - 시간초과
const solution = function (n, command) {
    const queue = [];
    const res = [];

    const push = (x) => queue.push(x);
    const pop = () => queue.length === 0 ? res.push(-1) : res.push(queue.shift());
    const size = () => res.push(queue.length);
    const empty = () => queue.length === 0 ? res.push(1) : res.push(0);
    const front = () => queue.length === 0 ? res.push(-1) : res.push(queue[0]);
    const back = () => queue.length === 0 ? res.push(-1) : res.push(queue[queue.length - 1]);

    for (const cmd of command) {
        if (cmd[0] === 'push') {
            push(cmd[1]);
        } else if (cmd[0] === 'pop') {
            pop(cmd[0]);
        } else if (cmd[0] === 'size') {
            size(cmd[0]);
        } else if (cmd[0] === 'empty') {
            empty(cmd[0]);
        } else if (cmd[0] === 'front') {
            front(cmd[0]);
        } else {
            back(cmd[0]);
        }
    }
    res.forEach(val => console.log(val))
}
//solution(input1, input2);



// 두번째 시도 - 시간초과
const solution2 = function (command) {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    function LinkedList() {
        this.head = null;
        this.length = 0;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    }
    LinkedList.prototype.isEmpty = function () {
        return Number(this.length === 0);
    }
    LinkedList.prototype.append = function (value) {
        let node = new Node(value);
        let current = this.head;
        if (this.head === null) {
            this.head = node;
        } else {
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    LinkedList.prototype.popleft = function () {
        let current = this.head;
        if (this.head === null) {
            return -1;
        } else {
            this.head = current.next;
            current.next = null;
            this.length--;
            return current.data;
        }

    }
    LinkedList.prototype.front = function () {
        if (this.head === null) {
            return -1;
        } else {
            return this.head.data;
        }
    }
    LinkedList.prototype.back = function () {
        let current = this.head;
        if (this.head === null) {
            return -1
        } else {
            while (current.next != null) {
                current = current.next;
            }
            return current.data;
        }
    }


    let queue = new LinkedList();

    for (const cmd of command) {
        if (cmd[0] === 'push') {
            queue.append(cmd[1])
        } else if (cmd[0] === 'pop') {
            console.log(queue.popleft());
        } else if (cmd[0] === 'size') {
            console.log(queue.size());
        } else if (cmd[0] === 'empty') {
            console.log(queue.isEmpty());
        } else if (cmd[0] === 'front') {
            console.log((queue.front()));
        } else {
            console.log(queue.back());
        }
    }
}
solution2(input2);