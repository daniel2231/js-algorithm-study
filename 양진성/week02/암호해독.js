const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const keys = input[0].split("").map((v) => Symbol(v));
const strs = input[1].split("");
const Length = keys.length;

const wordList = [];
for (let i = 0; i < strs.length; i += Length) {
  const arr = [];
  for (let j = i; j < i + Length; j++) {
    arr.push(strs[j]);
  }
  wordList.push(arr);
}

console.log(wordList);

const wordMap = new Map();

for (let i = 0; i < Length; i++) {
  const word = [];
  for (let j = 0; j < wordList.length; j++) {
    word.push(wordList[j][i]);
  }
  wordMap.set(keys[i], word.join(""));
}
// Symbol sort 안됨
const newSort = keys.sort();
