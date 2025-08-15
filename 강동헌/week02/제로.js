let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((x) => Number(x));

const K = parseInt(input[0]);
const numbersArray = input.slice(1, K + 1);

const answer = [];

numbersArray.forEach((x) => {
	if (x === 0) {
		answer.pop();
	} else {
		answer.push(x);
	}
});

if (answer.length === 0) {
	console.log(0);
} else {
	const sum = answer.reduce((acc, curr) => acc + curr, 0);

	console.log(sum);
}
