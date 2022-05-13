// slice() 문자열의 섹션을 추출
//         새 문자열로 반환합니다.
//         원래 문자열을 수정하지 않고


let fullName = "Marlboro Gold";
let firstName = "Song";
let lastName = "Je Young";

// 수동
//firstName = fullName.slice(0, 4); //0번째 인덱스 부터 4인덱스 이전까지(Song)
//lastName = fullName.slice(5);  //5번째 인덱스 부터 마지막까지(Je Young)

// 자동
firstName = fullName.slice(0, fullName.indexOf(" ")); //0번째 인덱스 부터 공백 이전까지
lastName = fullName.slice(fullName.indexOf(" ") + 1); //첫번째 공백인덱스+1 부터 끝까지



console.log(firstName);
console.log(lastName);