/*
  산술 표현식은 ...의 조합입니다.
  피연산자 (값, 변수 등)
  연산자( - * / %)
  값으로 평가할 수 있는
  ex. y = x + 5;
*/

//let students = 20;
//let students_2 = 21;

//students = students + 1;  //21 더하기
//students = students - 1;  //19 빼기
//students = students * 2;  //40 곱하기
//students = students / 2;  //10 나누기
//let extraStudent = students % 3;  //2 나머지
//let extraStudent = students % 2;  //0 나머지
//let extraStudent_2 = students_2 % 3; //0 나머지

//students += 1;  //21 일종의 바로가기
//students -= 1;  //19
//students *= 2;  //40
//students /= 2; //10
//let extraStudent %= 3;  //SyntaxError


//console.log(students);
//console.log(extraStudent);
//console.log(extraStudent_2);

/*
  연산자 우선 순위
  1. perenthesis () //가로안의 수
  2. exponents  //지수
  3. multiplication & division  //곱하기 & 나누기
  4. addition & subtraction //더하기 & 빼기
*/

//let result = 1 + 2 * (3 + 4); //15
//let result = (1 + 2) * (3 + 4); //21
let result = (1 + 2) * 3 + 4; //13

console.log(result);