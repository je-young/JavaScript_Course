// 삼항 조건 연산자(ternary operator) = 'if/else 문'에 대한 바로 가기
//                    3개의 피연산자를 사용합니다.
//                    1. 의 조건은?
//                    2. True인 경우 표현식:
//                    3. False인 경우 표현식
// condition(조건문) ? exprIfTrue(참일 때 실행할 식) : exprIfFalse(거짓일 때 실행할 식)


let adult = checkAge(21);

console.log(adult);

function checkAge(age) {
  if (age >= 18) {
    return true;
  }
  else {
    return false;
  }
}

let _adult = _checkAge(12);

console.log(_adult);

function _checkAge(age) {
  return age >= 18 ? true : false;
}


checkWinner(true);
checkWinner(false);

function checkWinner(win) {
  win ? console.log('YOU WIN!') : console.log('YOU LOSE!');
}