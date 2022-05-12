// const  = a variable that can't be changed(const = 변경할 수 없는 변수)

const PI = 3.14159; //const PI(대문자 좋은습관)
let radius; //반지름
let circumference;  //둘레

radius = window.prompt("원의 반지름을 입력"); //9를 입력함.
//console.log(typeof radius); //string
radius = Number(radius);  //타입을 Number로 변경

//PI = 420.69;  //파이 값을 실수로 변경시 (위에서 이미 const 로 변경 할 수 없는 변수로 지정하여 오류남)

circumference = 2 * PI * radius;  //계산공식

console.log("둘레는:", circumference);  //둘레는: 56.54862