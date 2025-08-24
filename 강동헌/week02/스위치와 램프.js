// 1. 한 램프에 두 스위치가 연결되어 있는 경우: 1~2개 스위치를 모두 눌러야 켜짐
// N-1개의 스위치를 눌러서 모든 램프를 켤 수 있는지 알아보자.

// First 정수는 그 스위치와 연결된 램프의 수, 연결된 램프의 번호가 공백으로 구분

let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((x) => x.split(' ').map(Number));

const switchCount = input[0][0];
const lampCount = input[0][1];
input.splice(0, 1);

let answerArray = [];

// 스위치 하나씩 제외

for (let excludeI = 0; excludeI < switchCount; excludeI++) {
	let lampSet = new Set();

	let tempArray = input.filter((e, i) => i !== excludeI);

	tempArray.forEach((x) => {
		for (let j = 1; j < x.length; j++) {
			lampSet.add(x[j]);
		}
	});

	if (lampSet.size === lampCount) {
		console.log(1);
		process.exit(0);
	}
}

console.log(0);
