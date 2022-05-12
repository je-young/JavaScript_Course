// hypotenuse calc practice program(빗변 계산 연습 프로그램)

let a;
let b;
let c;

// 화면 입력
a = window.prompt("A면 입력"); // string type
a = Number(a);  // number type 으로 변경

b = window.prompt("B면 입력"); // string type
b = Number(b);  // number type 으로 변경

// 계산
//c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("측면 c:", c);
