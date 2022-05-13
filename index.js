// !(NOT) 논리 연산자 NOT은 느낌표 !를 써서 만들 수 있습니다.
// 피연산자를 불린형(true / false)으로 변환합니다.
// true -> false , false -> true


let temp = - 15;
let sunny = true;

if (!(temp > 0)) {
  console.log("밖은 춥다.");
}
else {
  console.log("밖은 따뜻하다.");
}
if (!sunny) {
  console.log("밖은 화창하다.");
}
else {
  console.log("밖은 흐리다.");
}