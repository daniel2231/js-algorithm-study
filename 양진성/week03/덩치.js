// https://www.acmicpc.net/problem/7568
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = +input[0];
const people = input.slice(1).map((line) => {
  const [weight, height] = line.split(" ").map(Number);
  return { weight, height };
});

const rank = Array(N).fill(1);

for (let i = 0; i < people.length; i++) {
  for (let j = 0; j < people.length; j++) {
    if (
      people[i].weight > people[j].weight &&
      people[i].height > people[j].height
    ) {
      rank[j]++;
    }
  }
}

console.log(rank.join(" "));
