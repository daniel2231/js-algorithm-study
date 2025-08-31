// BOJ 16960 - 스위치와 램프

const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = lines[0].trim().split(/\s+/).map(Number);

// switches[i] = i번 스위치가 연결된 램프 번호 배열
const switches = Array.from({ length: N }, () => []);

const degree = Array(M + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const arr = lines[i].trim().split(/\s+/).map(Number);
  const k = arr[0] || 0;
  const lamps = arr.slice(1, 1 + k);
  switches[i - 1] = lamps;
  for (const l of lamps) degree[l] += 1;
}

// degree==1 스위치는 필수
const essential = Array(N).fill(false);

for (let i = 0; i < N; i++) {
  for (const l of switches[i]) {
    if (degree[l] === 1) {
      essential[i] = true; // 반드시 눌러야 함
      break;
    }
  }
}

// 비필수 스위치가 하나라도 있으면 그 하나를 빼고도 모두 켜짐
let ok = 0;
for (let i = 0; i < N; i++) {
  if (!essential[i]) {
    ok = 1;
    break;
  }
}

console.log(ok);
