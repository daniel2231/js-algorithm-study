const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const M = Number(input[0]);
const N = Number(input[1]);
const perfectNum = [];

for (let i = M; i <= N; i++) {
  if (Number.isInteger(Math.sqrt(i))) perfectNum.push(i);
}

if (perfectNum.length === 0) {
  console.log(-1);
  return;
}
let sum = perfectNum.reduce((a, b) => a + b);
console.log(sum);
console.log(perfectNum[0]);
