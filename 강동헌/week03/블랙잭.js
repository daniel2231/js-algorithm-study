let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((x) => x.split(' ').map(Number));

const N = input[0][0];
const M = input[0][1];
const num_array = input[1];
const ans_array = [];

for (let i = 0; i < num_array.length - 2; i++) {
	for (let j = i + 1; j < num_array.length; j++) {
		for (let k = j + 1; k < num_array.length; k++) {
			const sum = num_array[i] + num_array[j] + num_array[k];
			if (sum <= M) {
				ans_array.push(sum);
			}
		}
	}
}

const result = Math.max(...ans_array);
console.log(result);
