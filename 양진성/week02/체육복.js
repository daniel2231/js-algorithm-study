// https://school.programmers.co.kr/learn/courses/30/lessons/42862
function solution(n, lost, reserve) {
  const realLost = lost
    .sort((a, b) => a - b)
    .filter((v) => !reserve.includes(v));
  const reserveMap = new Map(
    reserve
      .sort((a, b) => a - b)
      .filter((v) => !lost.includes(v))
      .map((item) => [item, true])
  );
  const actualLost = [];

  for (const p of realLost) {
    if (reserveMap.get(p - 1)) {
      reserveMap.delete(p - 1); // 앞자리 빌리기
    } else if (reserveMap.get(p + 1)) {
      reserveMap.delete(p + 1); // 뒷자리 빌리기
    } else if (reserveMap.get(p)) {
      reserveMap.delete(p); // 본인 여벌 있을경우
    } else {
      actualLost.push(p);
    }
  }

  return n - actualLost.length;
}
