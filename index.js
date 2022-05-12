// const  = a variable that can't be changed(const = 변경할 수 없는 변수)

let pi = 3.14159; //파이
let radius; //반지름
let circumference;  //둘레

radius = window.prompt("원의 반지름을 입력"); //9를 입력함.
//console.log(typeof radius); //string
radius = Number(radius);  //타입을 Number로 변경

pi = 420.69;  //파이 값을 실수로 변경시

circumference = 2 * pi * radius;  // 계산공식

console.log("둘레는:", circumference);  //실수로 인한 둘레는: 7572.42