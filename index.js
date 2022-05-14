// return = 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환합니다.


let width;
let height;
let area;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("the area is", area);

function getArea(width, height) {
  return width * height;
}