// Maps are key-value pairs - can use any types as key or values

const map1 = new Map();

// set keys
const key1 = 'key string',
  key2 = {},
  key3 = function () {};

// set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));
// console.log(map1.size);

// iterating maps
// loop using for...of to get keys and values
for (let [key, value] of map1) {
  //   console.log(`${key}: ${value}`);
}

// iterate keys only
for (let key of map1.keys()) {
  //   console.log(key);
}

// iterate values only
for (let value of map1.values()) {
  //   console.log(value);
}

// use forEach
map1.forEach((value, key) => {
  //   console.log(`${key}:  ${value}`);
});

// convert to arrays
// create an array of key-value pairs
const keyValArr = Array.from(map1);
// console.log(keyValArr);

// create an array of values or keys
const valArr = Array.from(map1.values());
const keyArr = Array.from(map1.keys());
console.log(valArr);
console.log(keyArr);
