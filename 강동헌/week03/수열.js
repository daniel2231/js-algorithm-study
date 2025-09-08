let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [N, K] = input[0].split(' ').map(Number);
const temps = input[1].split(' ').map(Number);

// 첫 번째 윈도우의 합
let sum = temps.slice(0, K).reduce((a, b) => a + b);
let maxSum = sum;

console.log(maxSum);

// 슬라이딩 윈도우
for (let i = K; i < N; i++) {
	sum += temps[i] - temps[i - K];
	maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
