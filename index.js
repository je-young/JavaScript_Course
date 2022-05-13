// method chaining = calling one method after another
//                   in one continuous line of code
//                   (연속되는 한 줄의 암호로  메서드를 차례로 호출하는 방법)


let userNeme = "     Song Je Young      ";

// let 두줄코드 = userNeme.charAt(0);
// 두줄코드 = 두줄코드.toUpperCase();

let 한줄코드 = userNeme.toUpperCase().trim().charAt(0);
// toUpperCase() = 대문자로 변경
// trim() = 좌, 우 공백제거
// charAt() = 인덱스에 위치한 단일문자 반환

console.log(한줄코드);