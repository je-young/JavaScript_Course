// useful string properties & methods(유용한 문자열 속성 및 메서드)

let userName = "Song Je Young";
let poneNumber = "123-456-7890";

//console.log(userName.length); //13
//console.log(userName.charAt(0));  //s
//console.log(userName.indexOf("o"))  //1
//console.log(userName.lastIndexOf("o"))  //9
//userName = userName.trim(); //공백제거
//userName = userName.toUpperCase();  //모두 대문자
//userName = userName.toLowerCase();  //모두 소문자


poneNumber = poneNumber.replaceAll("-", "/"); //모두 변경 

console.log(poneNumber);