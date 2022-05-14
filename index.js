// break = break문은 if, switch, for,while문등에서 break문을 만나면 바로 빠져나가는 명령문
// continue = 어떠한 행위를 하다가 continue문을 만나면 해야할 명령문을 실행하지 않고 그 다음 명령문을 실행하는 명령문


for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    //break;
    continue;
  }
  console.log(i);
}