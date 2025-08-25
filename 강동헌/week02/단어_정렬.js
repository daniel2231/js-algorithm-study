// 길이가 짧은 것부터
// 길이가 같으면 사전 순으로
// 중복은 버림

let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const numberOfWords = input[0];
let wordsArray = [...input.slice(1).sort()];

wordsArray.sort((a, b) => a.length - b.length);

let answer = [...new Set(wordsArray)];

console.log(answer.join('\n'));