// function logMessage(value: string) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// Union Type - '|'
const lim: string | number | boolean;
function logMessage(value: string | number) {
  // type guard
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
// function askSomeone(someone: Developer | Person) {
//   // someone.name;
//   // someone.skill;
//   // someone.age;
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '누렁이', age: 100 });

// Intersection Type - '&'
// const lim1: string | number | boolean;
// const lim2: string & number & boolean;

function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 30 });
askSomeone({ name: '누렁이', age: 100, skill: '잠자기' });
