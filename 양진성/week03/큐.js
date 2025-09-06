// https://www.acmicpc.net/problem/10845
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

//  pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//  push X: 정수 X를 큐에 넣는 연산이다.
//  size: 큐에 들어있는 정수의 개수를 출력한다.
//  empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
//  front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//  back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  push(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  pop() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  front() {
    return this.items[this.headIndex];
  }
  back() {
    return this.items[this.tailIndex - 1];
  }
  length() {
    return this.tailIndex - this.headIndex;
  }
  getItems() {
    return this.items;
  }
}

const queue = new Queue();
const N = +input[0];
const answer = [];
for (let i = 1; i <= N; i++) {
  const [fn, param] = input[i].split(" ");
  if (fn === "push") {
    queue.push(param);
  }
  if (fn === "pop") {
    const size = queue.length();
    if (!size) {
      answer.push(-1);
      continue;
    }
    const item = queue.pop();
    answer.push(item);
  }
  if (fn === "size") {
    const size = queue.length();
    answer.push(size);
  }
  if (fn === "empty") {
    const size = queue.length();
    answer.push(size > 0 ? 0 : 1);
  }
  if (fn === "front") {
    const front = queue.front();
    const size = queue.length();
    answer.push(size > 0 ? front : -1);
  }
  if (fn === "back") {
    const back = queue.back();
    const size = queue.length();
    answer.push(size > 0 ? back : -1);
  }
}

console.log(answer.join("\n"));
