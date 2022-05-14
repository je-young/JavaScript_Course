// variable scope = 변수에 접근할 수 있는 곳
// let = 변수는 블록 범위 {}로 제한됩니다.
// var = 변수는 function(){}으로 제한됩니다.

/*
for (var i = 1; i <= 3; i++) {
  console.log(i) //1,2,3 [let, var]
}
  console.log(i) //[let] Uncatched ReferenceError: i가 정의되지 않았습니다. [var] 4

doSomething();
function doSomething() {
  for (var i = 1; i <= 3; i++) {
    console.log(i) //1,2,3 [let, var]
  }
}
console.log(i); //[let] Uncatched ReferenceError: i가 정의되지 않았습니다. [var] 4
*/

let name = 'song'; // window