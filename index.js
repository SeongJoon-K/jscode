// 변수 선언
let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice + mochaPrice);
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice * 3);

// /* 목적을 명확히
// 불필요한 것들은 숨기고
// 핵심만 */

function printChorus() {
    console.log('무궁화 삼천리 화려 강산');
    console.log('대한 사람 대한으로 길이 보전하세');
  }
  
  // 애국가 가사
  console.log('1절');
  console.log('동해 물과 백두산이 마르고 닳도록');
  console.log('하느님이 보우하사 우리나라 만세');
  printChorus();
  
  console.log('2절');
  console.log('남산 위에 저 소나무 철갑을 두른 듯');
  console.log('바람서리 불변함은 우리 기상일세');
  printChorus();
  
  
  console.log('3절');
  console.log('가을 하늘 공활한데 높고 구름 없이');
  console.log('밝은 달은 우리 가슴 일편단심일세');
  printChorus();
  
  console.log('4절');
  console.log('이 기상과 이 맘으로 충성을 다하여');
  console.log('괴로우나 즐거우나 나라 사랑하세');
  printChorus();


function welcome(name) {
    console.log('안녕하세요' + name + '님');
}

welcome('코드잇');

// 여기에 코드를 입력해 주세요.
function teraToGiga(tera){
    console.log(tera + 'TB는');
    console.log(tera*1024 +'GB' + ' 입니다.');
  }
  
  function teraToMega(tera){
    console.log(tera + 'TB는');
    console.log(tera*1024*1024 + 'MB' + ' 입니다.');
  }
  // TB -> GB 테스트
  teraToGiga(2);
  // TB -> MB 테스트
  teraToMega(2);



// 문자열 
console.log("He said \"I'm Iron man\"");
console.log("He said \"I'm Iron man\"");
console.log("He said \"I'm Iron man\"");

// 위 같은 경우에는 문자열을 읽기가 너무 불편해서 빽 틱 ``을 사용한다.

console.log(`He said "I'm Iron man"`)

// 불린
console.log(2 < 1 && 'codeit' !== 'codeit')

// 형변환
console.log(4 + '2');
console.log(4 + 2);
console.log(4 - true);
console.log(4 + false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');

// 같음 비교 연선 (===, !==, ==, !=)
console.log(1 === '1'); // 일치, 불일치(!==)
console.log(1 === true);
console.log(1 == '1'); // 동등, 부등(!=)
console.log(1 == true); 

// 동등과 부등에서는 형변환이 일어나지만, 일치 불일치는 형변환 안 일어남.

// 템플릿 문자열
let year = 2018;
let month = 3;
let day = 11;



console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

// 템플릿 문자열에서 주의사항은 ""와 ''가 아닌 빽틱 ``을 사용해야 하는 것임.
function calcWage(name, time, wage) {
  let total = time * wage;
  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);

function square(x) {
  console.log('return전');
  return x * x;
  console.log('return후');
}

console.log('함수호출전')
console.log(square(3))
console.log('함수호출후')