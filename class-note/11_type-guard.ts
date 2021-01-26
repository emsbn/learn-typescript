interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron' };
}
const tony = introduce();
// console.log(tony.skill); // error
console.log(tony.name);

if ((tony as Developer).skill) {
  const skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  const age = (tony as Person).age;
  console.log(age);
}
