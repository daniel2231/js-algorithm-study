let input = require('fs').readFileSync('/dev/stdin').toString();

// 종말의 수란 어떤 수에 6이 적어도 3개 이상 연속으로 들어가는 수를 말한다
// 내가 빡대가리인가 왜 이해가 안되지

// 1666 2666 3666 4666 5666 다음에 6666 아닌가
// 6이 적어도 3개 이상 연속으로 들어가는 수 -> 그럼 6660 인가?
// 그럼 16은 16660?
// 26은 26660?
// 66은 66600?
// 187은 왜 66666임?
// ???
// 능지 이슈로 이해를 못하겠음
// 6660 -> 6661 ???????????????
// 666이 연속으로 들어가는 수들을 작은 순서대로 나열했을 때, N번째 수는? 이건가?

let n = parseInt(input);
let count = 0;
let num = 666;

while (true) {
    if (num.toString().includes('666')) {
		count++;
		if (count === n) {
			console.log(num);
			break;
		}
	}
	num++;
}

// 띠발...

