// do while loop = 코드 블록을 한 번 반복한 다음 조건이 true인 동안 반복합니다.


let userName;

/*
while (userName == "") {
  userName = window.prompt("이름을 입력하세요.");
}
console.log("반갑습니다", userName); //반갑습니다 undefined
*/

// 위의 코드는 처음부터 false 이므로 코드를 최소 한번이상 실행하고 싶다면 do while 사용
do {
  userName = window.prompt("이름을 입력하세요.");
}while (userName == "")

console.log("반갑습니다", userName);