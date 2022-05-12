// Type Conversion = change the of a value to another(변환 유형 = 값을 다른 값으로 변경)
//                   (strings, numbers, booleans) 


/*
let age = window.prompt("나이가 어떻게 되시나요?");

console.log(typeof age); //string

age = Number(age); // age 변수를 넘버로 변경

console.log(typeof age); //number

age += 1;

console.log("생일 축하 합니다! 당신의 나이는 " + age + " 살 입니다~^^");
*/

let w;
let x;
let y;
let z;
let s;

w = Number("pizza"); //NaN 'number'
x = Number("3.14"); //3.14 'number'
y = String(3.14); //3.14 string
z = Boolean(""); //false 'boolean'
s = Boolean("pizza"); //true 'boolean'


console.log(w, typeof w); //NaN 'number'
console.log(x, typeof x); //3.14 'number'
console.log(y, typeof y); //3.14 string
console.log(z, typeof z); //false 'boolean'
console.log(s, typeof s); //true 'boolean'
