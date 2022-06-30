// create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym2);

// console.log(`hello ${sym2.description}`);
// console.log(`hello ${sym2.toString()}`);

// Unique object keys
const key1 = Symbol();
const key2 = Symbol('sym2');

const myObj = {};

myObj[key1] = 'prop1';
myObj[key2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

// console.log(myObj[key1]);
// console.log(myObj[key2]);
// console.log(myObj);

// symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'p1' }));
console.log(JSON.stringify({ [Symbol('JSON')]: 'json' }));
