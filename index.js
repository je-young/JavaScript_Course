// switch = 복수의 if 조건문은 switch문으로 바꿀 수 있습니다.
//          switch문을 사용한 비교법은 특정 변수를 다양한 상황에서 비교할 수 있게 해줍니다.
//          코드 자체가 비교 상황을 잘 설명한다는 장점도 있습니다.
//          switch문은 하나 이상의 case문으로 구성됩니다. 대개 default문도 있지만, 이는 필수는 아닙니다.

// switch

let grade = "40";
switch (true) {
  case grade >= 89:
    console.log("아주 잘 했어!");
    break;
  case grade >= 79:
    console.log("잘했어!");
    break;
  case grade >= 69:
    console.log("평균은 했어!");
    break;
  case grade > 59:
    console.log("노력 좀 해봐!");
    break;
  case grade <= 59:
    console.log("낙제!");
    break;
  default:
    console.log(grade, "는 점수가 아닙니다!");
}

// let grade = "Pizza";
// switch (grade) {
//   case "A":
//     console.log("아주 잘 했어!");
//     break;
//   case "B":
//     console.log("잘했어!");
//     break;
//   case "C":
//     console.log("평균은 했어!");
//     break;
//   case "D":
//     console.log("노력 좀 해봐!");
//     break;
//   default:
//     console.log(grade, "등급이 아닙니다!");
// }



// if
// let grade = "";

// if (grade == "A") {
//   console.log("아주 잘 했어!");
// } else if (grade == "B") {
//   console.log("잘했어!");
// } else if (grade == "C") {
//   console.log("평균은 했어!");
// } else if (grade == "D") {
//   console.log("노력 좀 해봐!");
// } else if (grade == "E") {
//   console.log("커서 뭐 될래?");
// } else {
//   console.log(grade, "등급이 아닙니다.");
// }
