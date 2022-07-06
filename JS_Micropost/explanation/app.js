// const greeting = 'Hello World';
// console.log(greeting);

// CommonJS Module syntax
// const person = require('./mymodule1');
// console.log(person.name);

// ES2015 Module
// import { car, getYear } from './mymodule2'; // import selected modules
// console.log(car.brand);
// console.log(getYear());

import * as mod2 from './mymodule2'; // import all modules
console.log(mod2.car.brand);
console.log(mod2.getYear());

// import the variable marked as "default" declared in the module (no need wrapped in curly braces while import)
import model from './mymodule2';
console.log(model);
