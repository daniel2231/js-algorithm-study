// 티셔츠는 6가지 사이즈, T장 묶음으로만 구매 가능
// 펜은 P자루씩 묶음으로 주문하거나 한개씩 주문 가능
// 티셔츠는 남아도 됨, 펜은 정확하게 준비되어야함

// 첫 줄 참가자 수
// 사이즈별 신청자 수
// 정수 티셔츠와 펜의 묶음 수 T, P

// Tshirt 판매수 function
// 사이즈별:
//     0 아니면 아니면 사이즈별 / T 한후 올리기

// 펜:
//     펜 개수/P 후 펜 개수, 개수%P

const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n')
	.map((x) => x.split(' ').map(Number));

const attendeeNum = input[0][0];
const tShirtSizes = input[1];
const [T, P] = input[2];

let sum = 0;

tShirtSizes.forEach((size) => {
	if (size > 0) {
		sum += Math.ceil(size / T);
	}
});

console.log(sum);
console.log(Math.floor(attendeeNum / P), attendeeNum % P);
