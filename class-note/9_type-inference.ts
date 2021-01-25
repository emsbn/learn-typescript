// 타입 추론 기본 1
const a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

10 + '10'; // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
//
// const shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<T, K> extends Dropdown<K> {
  description: string;
  tag: T;
}

const detailedItem: DetailedDropdown<string, number> = {
  title: 'abc',
  description: 'ab',
  value: 1,
  tag: 'a',
};
