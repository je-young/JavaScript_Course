// variables

let firstName = 'Bro'; //string
let age = 21 //number
let student = true; //boolean


console.log('Hello', firstName); //Hello Bro
console.log('You are', age, 'years old'); //You are 21 years old
console.log('Je-Young', student); //Je-Young true


document.getElementById("p1").innerHTML = "Hello " + firstName; //Hello Bro
document.getElementById("p2").innerHTML = "You are " + age + " years old"; //You are 21 years old
document.getElementById("p3").innerHTML = "Enrolled: " + student; //Enrolled true