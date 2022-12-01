// [연산자]

// [산술 연산자]

// @ +: 덧셈, -: 뺄셈, *: 곱셉, /: 나눗셈(몫)

// @ %: 나머지 연산자
console.log(10 % 5) // 0
console.log(10 % 3) // 1

// @ **: 지수 연산자
console.log(2 ** 3) // 8

// @ ++, --: 증감 연산자
let number = 10;
number++;
console.log(number); // 11
number--;
console.log(number); // 10

// [비교 연산자]
let a = 123;
let b = '123';

// @ ==: 동등 연산자(추상 비교)
// : 값 비교
console.log(a == b); // true

// @ ===: 일치 연산자(엄격 비교)
// : 값, 타입 비교
console.log(a === b); // false

// @ !==: 불일치 연산자
// : 값, 타입 비교
console.log(a !== b); // true

// [논리 연산자]
a = 2 < 3; // true
b = 30 > 50; // false

// @ &&: AND 연산자
console.log(a && b); // false

// @ ||: OR 연산자
console.log(a || b); // true

// @ !: NOT 연산자
console.log(!a); // false

// [삼항 연산자]
// 조건 ? 참일 때 실행 부분 : 거짓일 때 실행 부분
console.log(2 < 3 ? '참' : '거짓'); // 참
console.log(2 > 3 ? '참' : '거짓'); // 거짓

// [널 병합(널리쉬) 연산자]
// 여러 개의 피연산자 중 값이 확정되어 있는 변수를 찾음

// @ ??
// null이나 undefined(확정되어 있지 않음)가 아닌 값을 찾음
// 처음부터 차례로 검사해 값을 찾으면 찾은 값을 바로 반환하고 검사 종료
a = undefined;
b = null;
c = '문자열';
d = 1;
console.log(a ?? b); // null
console.log(a ?? b ?? c); // 문자열
console.log(a ?? b ?? c ?? d); // 문자열

c = 1;
d = '문자열';
console.log(c ?? d); // 1

// [비트 연산자]

// @ &, |, ~, ^, <<, >>

// [대입 연산자]

// @ +=, -=, *=, /=, %=, **= 처럼 산술 연산자에 = 을 붙여 복합 대입 연산자를 만들 수 있다.
number = 10;
number += 2;
console.log(number); // 12

number %= 2;
console.log(number); // 0

// [전개 구문]: 반복이 가능한 배열이나 객체가 가진 요소를 꺼내 펼친다.

// @ 변수 앞에 ...을 붙여 사용
const numbers = [1, 2, 3];
console.log(numbers); // (3) [1, 2, 3]
console.log(...numbers); // 1 2 3

const obj = {
    name: '허준혁',
    age: 28
};
let clonedObj = {...obj};
console.log(clonedObj); // {name: '허준혁', age: 28}

// @ 전개 구문 활용해 배열 합치기
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];
const newNumbers = [...numbers2, ...numbers3];
console.log(newNumbers); // (6) [4, 5, 6, 7, 8, 9]

// @ 전개 구문은 iterable 객체에만 적용
console.log(...obj) // TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function







