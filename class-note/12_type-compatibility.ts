// 인터페이스(클래스)
interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
// }
class Person {
  name: string;
}
let developer: Developer;
let person: Person;
// developer = Person; // error
developer = new Person(); // error
person = developer;

// 함수: 내부 구현 로직은 상관 없음
let add = function (a: number) {
  // ...
};
let sum = function (a: number, b: number) {
  // ...
};
add = sum; // error
sum = add;

// 제네릭
interface Empty<T> {
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2; // error
notempty2 = notempty1; // error
