interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// };

const lim: Person = {
  name: '누렁',
  age: 30,
};

type MyString = string;
const str: MyString = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}
