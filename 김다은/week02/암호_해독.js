const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

let key = lines[0].trim().split("");
let secret_line = lines[1].trim();

const N = key.length;
let column_length = secret_line.length / N;

const keyed = key.map((ch, idx) => ({ ch, idx }));
let sorted_key = [...keyed].sort((a, b) =>
  a.ch === b.ch ? a.idx - b.idx : a.ch < b.ch ? -1 : 1
);

// console.log("sorted_key: ", sorted_key);
// sorted_key: [
//   { ch: "D", idx: 3 },
//   { ch: "G", idx: 6 },
//   { ch: "H", idx: 0 },
//   { ch: "I", idx: 4 },
//   { ch: "M", idx: 2 },
//   { ch: "N", idx: 5 },
//   { ch: "U", idx: 1 },
// ];

const colsSorted = Array.from({ length: N }, (_, i) =>
  secret_line.slice(i * column_length, (i + 1) * column_length).split("")
);

// console.log("colsSorted: ", colsSorted);
// colsSorted: [
//   ["E", "I", "A", "A", "H", "E", "B", "X"],
//   ["O", "I", "F", "W", "E", "H", "R", "X"],
//   ["O", "N", "N", "A", "A", "L", "R", "S"],
//   ["U", "M", "N", "R", "E", "D", "E", "X"],
//   ["C", "T", "L", "F", "T", "V", "E", "X"],
//   ["P", "E", "D", "A", "R", "T", "A", "X"],
//   ["N", "A", "A", "R", "Y", "I", "E", "X"],
// ];

const colsOriginal = Array(N);
for (let i = 0; i < N; i++) {
  const originalColIdx = sorted_key[i].idx;
  colsOriginal[originalColIdx] = colsSorted[i];
  // console.log("originalColIdx: ", originalColIdx);
  // originalColIdx: 3;
  // originalColIdx: 6;
  // originalColIdx: 0;
  // originalColIdx: 4;
  // originalColIdx: 2;
  // originalColIdx: 5;
  // originalColIdx: 1;
}

let answer = [];
for (let i = 0; i < column_length; i++) {
  for (let j = 0; j < N; j++) {
    answer += colsOriginal[j][i];
  }
}

console.log(answer);
