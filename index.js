// Function = 함수(function)란 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록을 의미합니다.
//            이러한 함수는 필요할 때마다 호출하여 해당 작업을 반복해서 수행할 수 있습니다.



function 시작프로그램() {
  let 이름 = "송제영";
  let 나이 = 45;

  생일축하노래(이름, 나이);
}

시작프로그램();

function 생일축하노래(a, b) {
  console.log("생일 축하 합니다~");
  console.log("생일 축하 합니다~");
  console.log("사랑하는" , a, "생일 축하 합니다~");
  console.log("생일 축하 합니다~");
  console.log("생일 축하 합니다~");
  console.log("사랑하는", a, b, "살");
  console.log("생일 축하 합니다~");
}

