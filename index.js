// How to accept user input(사용자 입력을 받아들이는 방법)

// EASY WAY with a window prompt(창 프롬프트가 있는 쉬운 방법)

// let usernames = window.prompt("성명?");
// console.log(usernames);



// DIFFICULT WAY HTML textbox(어려운 방법 HTML 텍스트 상자)

let usernames = document.getElementById("myButton").onclick = function () {
  
  usernames = document.getElementById("myText").value;
  console.log(usernames);

  document.getElementById("myLabel").innerHTML = "반가워요~ " + usernames + " 고객님!";
}