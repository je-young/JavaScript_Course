// checked 속성

document.getElementById("myButton").onclick = function () {

  const myCheckBox = document.getElementById("myCheckBox");
  const bcBtn = document.getElementById("bcBtn");
  const masterBtn = document.getElementById("masterBtn");
  const visaBtn = document.getElementById("visaBtn");

  if (myCheckBox.checked) {
    console.log("당신은 구독 체크박스를 클릭하셨습니다.");
  } else {
    console.log("당신은 구독 체크박스를 클릭하세요.");
  }

  if (bcBtn.checked) {
    console.log("BC카드로 결제합니다!")
  } else if (masterBtn.checked) {
    console.log("MASTR카드로 결제합니다!")
  } else if (visaBtn.checked) {
    console.log("VISA카드로 결제합니다!")
  }else {
    console.log("지불 수단을 선택하세요!")
  }
  
}