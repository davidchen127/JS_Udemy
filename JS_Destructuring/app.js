// Destructuring
let a, b;

// Rest pattern
[a, b, ...restItem] = [100, 200, 300, 400, 500];

// console.log(a);
// console.log(restItem);

// ({ a, b } = { a: 10, b: 20, c: 30, d: 40, e: 50 });
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 50 });
// console.log(a, b);
// console.log(rest);

// Array destructuring
const people = ['Anna', 'Bella', 'Catha'];
const [person1, person2, person3] = people;
// console.log(person2);

// Parse array returned from function
function getPeople() {
  return ['Donna', 'Ella', 'Fina'];
}
[per1, per2, per3] = getPeople();
// console.log(per1, per2, per3);

// Object destructuring
const car = {
  brand: 'Toyota',
  age: 13,
  color: 'red',
  model: 'Yaris',
  getKM() {
    console.log(`25503 km`);
  },
};
// old ES5 way
const brand5 = car.brand,
  age5 = car.age,
  color5 = car.color,
  model5 = car.model;

// new ES6 way
const { brand, age, model, getKM } = car;
console.log(brand, age, model);
getKM();
