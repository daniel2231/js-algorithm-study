let input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let left = 0;
let sum = 0;
let answer = Infinity;

for (let right = 0; right < N; right++) {
    sum += arr[right];
    
    // 합이 S 이상이 되면 왼쪽 포인터를 이동
    while (sum >= S) {
        answer = Math.min(answer, right - left + 1);
        sum -= arr[left];
        left++;
    }
}

console.log(answer === Infinity ? 0 : answer);