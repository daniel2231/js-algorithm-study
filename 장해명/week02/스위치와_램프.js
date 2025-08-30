const input = require("fs").readFileSync(0, "utf8").trim().split("\n"); // [ '4 5', '3 1 3 5', '1 2', '3 3 4 5', '1 1' ]
// N : 스위치 수, M : 램프 수
const [N, M] = input[0].split(" ").map(Number); 
// lamp1 = index 1, 각 램프 별로 연결된 스위치 개수 확인
const lampCount = Array(M+1).fill(0); 


const data = input.splice(1,N); 
const answer = []; 

// 스위치 하나씩 확인
for(const row of data){
    const arr = row.split(" "); 
    const lamp = Number(arr[0]); 
    const lampArr = arr.splice(1,lamp); 

    // 연결된 램프 번호 확인 
    for (const item of lampArr){
        lampCount[item]++; 
    }
}
if(lampCount.includes(1)){
    console.log(0)
} else {
    console.log(1); 
}

/* -- 이해 -- */ 
// lampCount 배열이 1 포함 = 특정 램프가 특정 스위치로만 끌 수 있음 = 0 출력
// = 필수 스위치가 존재한다는 사실만 알려줌, 그 외 다른 스위치 중 제거 가능한 게 있으면 1 출력

/* -- 문제 해석 -- */ 
// 문제) N-1 개 스위치로 모든 램프를 끄는 것이 '가능한지' 

// 오답

