// Iterator
// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < names.length?
//  { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// // create array of names
// const namesArr = ['jill', 'Jane', 'Kenny'];

// const names = nameIterator(namesArr);
// console.log(names.next());
// console.log(names.next());
// console.log(names.next().value);
// console.log(names.next());

// Generator
// function* sayNames() {
//   yield 'John';
//   yield 'Brian';
//   yield 'Fanny';
// }

// const theName = sayNames();
// console.log(theName.next());
// console.log(theName.next());
// console.log(theName.next().value);

// ID creator
function* createIDs() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const gen = createIDs();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
