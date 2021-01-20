function Person(name, age) {
  this.name = name;
  this.age = age;
}
const limm = new Person('누렁', 100);

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

const lim = new Person('누렁이', 2); // 생성 되었습니다.
console.log(lim);
