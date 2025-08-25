// N 비번 M 찾는 비번

let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((x) => x.split(' '));

const [N, M] = input[0].map((x) => parseInt(x));

const passwordStorage = new Map(input.slice(1, N + 1));

const findPasswordStorage = new Set(input.splice(N + 1, input.length));

findPasswordStorage.forEach((x) => {
	const siteName = x[0];

	console.log(passwordStorage.get(siteName));
});
