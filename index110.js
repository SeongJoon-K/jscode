
// let temperature = 1;

// if (temperature <= 0) {
//     console.log('물이 업니다.')
// } else {
//     console.log('물이 얼지 않습니다.');
// }

// function printGrade(midtermScore, finalScore){
// 	let totalScore = midtermScore + finalScore;
//   if (totalScore >= 90) {
//     console.log("A");
//   } else if (totalScore >= 80) {
//     console.log("B");
//   } else if (totalScore >= 70) {
//     console.log("C");
//   } else if (totalScore >= 60) {
//     console.log("D");
//   } else {
//     console.log("F")
//   }
// }
// // 테스트 코드
// printGrade(25, 35);
// printGrade(50, 45);
// printGrade(29, 24);
// printGrade(37, 42);

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else {
      return callYoungerSister;
  } else {
      if (yourGender === 'male') {
          return callOlderBrother;
      } else if (yourGender === 'female') {
          return callOlderSister;
      }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);


// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
  switch (grade) {
    case 'R' :
      console.log(`R석은 ${RPrice}만원 입니다.`);
      break;
    case 'VIP' :
      console.log(`VIP석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'S' :
      console.log(`S석은 ${SPrice}만원 입니다.`);
      break;
    case 'A' :
      console.log(`A석은 ${APrice}만원 입니다.`);
      break;
    default :
      console.log("VIP, R, S, A 중에서 하나를 선택해 주세요.");
  }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');


function printTriangle(height) {
  let sTar = ''
  for (let i = 0; i < height; i++) {
    sTar += '*'
    console.log(sTar);

  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

let i = 1; // 첫 번째 항
let k = 1; // 두 번째 항
let pre = 0;
let cur = 1;
let count = 1;
while (count <= 50) {
  console.log(cur);
  let im = pre;
  pre = cur ;
  cur = cur + im;
  count++;
  
}