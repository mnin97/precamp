//데이터 타입, 연산자 실습

1 + 1
// 2
1 + '1'
// '11'
1 - '1'
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
//flase



//조건문 실습 1

if(1+1 === 2) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}
// VM975:2 정답입니다
undefined
if(true) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}
// VM1288:2 정답입니다
undefined
if(!true) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}
// VM1715:4 틀렸습니다
undefined
if(0) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}
// VM1732:4 틀렸습니다
undefined
if(1) {
  console.log("정답입니다")
} else {
  console.log("틀렸습니다")
}
// 정답입니다



//조건문 실습 2

const profile = {
  name: "철수",
  age:12,
  school:"다람쥐초등학교"
}
undefined

profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
if(profile.age>=20) {
    console.log("성인입니다")
} else if(profile.age >=8) {
    console.log("학생입니다")
} else if(profile.age>=0) {
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하였습니다")
}
// VM3609:4 학생입니다
undefined


