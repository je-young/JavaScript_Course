// random number generator(난수 생성기)


//let x = Math.random();
//let x = Math.random() * 6;
//let x = Math.floor(Math.random() * 6); //난수 0~5까지

//주사위 3개
// let x = Math.floor(Math.random() * 6) + 1; //난수 1~6까지(주사위)
// let y = Math.floor(Math.random() * 6) + 1;
// let z = Math.floor(Math.random() * 6) + 1;

// console.log(x);
// console.log(y);
// console.log(z);

let x;
let y;
let z;

document.getElementById("rollBtn").onclick = function () {

  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
}