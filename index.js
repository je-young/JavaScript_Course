// && (논리 AND) 연산자 - 두조건이 모두 참 일경우 
// || (논리 OR) 연산자 - 둘중 하나만 참 일경우
// 자바스크립트에서의 &&와 || 연산자는 boolean 값이 아니라 그냥 값 자체를 리턴


// let temp = 15;
// if (temp >= 0 && temp <= 30) {
//   console.log("날씨가 좋아요!");
// }
// else {
//   console.log("날씨가 나빠요!");
// }


// let 온도 = 15;
// if (온도 <= 0 || 온도 >= 30) {
//   console.log("날씨가 나빠요!");
// }
// else {
//   console.log("날씨가 좋아요!");
// }


let temp = 15;
let sunny = true;
if (temp > 0 && temp < 30 && sunny) {
  console.log("날씨가 좋아요!");
}
else {
  console.log("날씨가 나빠요!");
}
