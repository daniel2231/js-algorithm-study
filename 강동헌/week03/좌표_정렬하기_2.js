let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((x) => x.split(' ').map(Number));

const N = input[0][0];
input.shift();

input.sort((a, b) => {
	if (a[1] === b[1]) {
		return a[0] - b[0];
	}
	return a[1] - b[1];
});

input.map((x) => {
	console.log(x.join(' '));
});
