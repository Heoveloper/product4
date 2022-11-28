// [원시 데이터 타입]: 객체가 아니면서 메서드도 가지지 않는 데이터
// string, number, bigint, boolean, undefined, null, symbol

// [number]: 숫자 데이터 타입
// 숫자 데이터 타입 표현 범위: -(2^53-1) ~ (2^53-1)
const a = 123;
console.log(typeof a); // number

// [bigint]: 숫자 데이터 타입 표현 범위를 벗어난 경우 지정되는 타입
const b = 123n;
console.log(typeof b); // bigint

// [string]: 문자열 데이터 타입
// "", '', `` 모두 사용 가능
const c = '문자열'
console.log(typeof c); // string

// @ 백틱
const age = 20;
const job = '개발자';

// 백틱을 사용하지 않는 경우
const msg = '저는 ' + job + '이고, ' + age + '살입니다.';
console.log(msg); // 저는 개발자이고, 20살입니다.

// 백틱을 사용하는 경우
const msg2 = `저는 ${job}이고, ${age}살입니다.`
console.log(msg2); // 저는 개발자이고, 20살입니다.

// [boolean]: 참 또는 거짓 중 하나만 값으로 가질 수 있는 논리 타입
const isTrue = true;
console.log(typeof isTrue); // boolean
const isFalse = 10 > 20;
console.log(typeof isFalse); // boolean

// [null]: 값이 존재하지 않는 것을 나타내는 타입

// [undefined]: 값이 지정되지 않았다는 것을 나타내는 타입
let hello;
console.log(hello); // undefined

 