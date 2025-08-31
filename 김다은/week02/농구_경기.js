const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input[0]);
const counts = {};

for (let i = 1; i <= N; i++) {
  let first = input[i][0];
  counts[first] = (counts[first] || 0) + 1;
}

let answer = Object.keys(counts)
  .filter((ch) => counts[ch] >= 5)
  .sort()
  .join("");

if (answer.length === 0) {
  console.log("PREDAJA");
} else {
  console.log(answer);
}
