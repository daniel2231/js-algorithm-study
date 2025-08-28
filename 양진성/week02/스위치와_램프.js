// https://www.acmicpc.net/problem/16960
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 램프 정보
const switches = input
  .slice(1)
  .map((line) => line.split(" ").slice(1).map(Number));

// 램프별 스위치 개수 카운팅
const initialLampCounts = Array(m).fill(0);
const lampSwitchCount = switches.reduce((lampCounts, switchLamps) => {
  for (const lamp of switchLamps) {
    lampCounts[lamp - 1]++;
  }
  return lampCounts;
}, initialLampCounts);

let answer = 0;

for (let i = 0; i < n; i++) {
  const tempCount = [...lampSwitchCount];
  // i번 스위치를 껐을 때 램프 카운트 줄이기
  for (const lamp of switches[i]) {
    tempCount[lamp - 1]--;
  }

  // 모든 램프가 하나 이상 연결되어 있는지 확인
  const valid = tempCount.every((v) => v >= 1);
  if (valid) {
    answer = 1;
    break;
  }
}

console.log(answer);
