// sets - store unique values of any types (no duplicate)

const set1 = new Set();

// add values to set
set1.add(100);
set1.add('i like it');
set1.add({ brand: 'Benz' });
set1.add(true);
set1.add('i like it'); // this is dubplicated

// const set2 = new Set([100, true, { model: 'Yaris' }]);
// console.log(set2);

console.log(set1);
// console.log(set1.size);

// console.log(set1.has(29 + 71)); //29 + 71=100 and 100 is in the set1
// console.log(set1.has({ brand: 'Benz' })); // return false because it's another object

set1.delete(100); // can't delete reference type such as object
// console.log(set1);

// iterate through sets
// for...of
for (let item of set1) {
  //   console.log(item);
}

set1.forEach((value) => {
  console.log(value);
});

// convert to array
const setArr = Array.from(set1);
console.log(setArr);
