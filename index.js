// nested loop = 중첩루프(다른 루프 내부의 루프)


// for (let i = 1; i <= 2; i += 1){
//   for (let j = 1; j <= 3; j += 1){
//     console.log(j);
//   }
// }

let symbols = window.prompt("Enter a symbol to use ");
let lows = window.prompt("Enter # of lows");
let columns = window.prompt("Enter # of columns");

for (let i = 1; i <= lows; i += 1){
  for (let j = 1; j <= columns; j += 1){
    document.getElementById("myRectangle").innerHTML += symbols;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}