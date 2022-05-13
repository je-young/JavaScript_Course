// while loop = while문은 조건문이 참일 때 실행되는 반복문이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다.
// 코드 수행 순서는
// 1. 먼저 조건식을 판단하고,
// 2. 조건식의 결과가 true이면, 코드 블록 수행합니다.
//    조건식의 결과가 false이면, while문을 빠져나옵니다.
// 1번과 2번을 반복적으로 수행합니다.


let userName = "";

while (userName == "" || userName == null) {
  userName = window.prompt("이름을 입력하세요.");
}

console.log("반갑습니다", userName);