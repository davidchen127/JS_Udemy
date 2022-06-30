// ES5 way to create object => very weird!!!
// basic object
{
// function Person(firstName,lastName,bday){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.birthday=new Date(bday);
// }

// Person.prototype.getAge= function(){
//     const diff=Date.now()-this.birthday.getTime();
//     const ageDate=new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()-1970);
// }

// const john= new Person('John','Dannis','01 27 1988');

// // firstName property exists in the object property
// console.log(john.hasOwnProperty('firstName'));
// // getAge method exists in the "prototype", not  object property
// console.log(john.hasOwnProperty('getAge')); 
}

// Prototype inheritance
{
// define Person
// function Person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }
// // Instantiate a Person
// Person.prototype.greeting= function(){
//     return `Hello ${this.firstName} ${this.lastName}`;
// }
// const person=new Person('May','Lin');
// console.log(person);
// console.log(person.greeting());

// // Define Customer
// function Customer(firstName,lastName,phone,membership){
//     Person.call(this,firstName,lastName);

//     this.phone=phone;
//     this.membership=membership;
// }
// // Inherit the Person prototype methods
// Customer.prototype=Object.create(Person.prototype);
// // Make customer.prototype return Customer()
// Customer.prototype.constructor=Customer;

// // Instantiate Customer
// const custmoer1=new Customer('Jim','Wang',22144,'gold');
// console.log(custmoer1);

// Customer.prototype.greeting=function(){
//     return `${this.firstName}, you are really funny`;
// }
// console.log(custmoer1.greeting());
}

// Use Object.creat() to create objects
{
// const personPrototype={
//     greeting:function(){
//         return `how are you, ${this.firstName} ${this.lastName}?`;
//     },
//     getsMarried: function(newLastName){
//         this.lastName=newLastName;
       
//     }
// }
// const anna=Object.create(personPrototype);
// anna.firstName='Anna';
// anna.lastName='Yen';
// anna.age=32;
// console.log(anna.greeting());
// anna.getsMarried('Melo');
// console.log(anna.greeting());

// // Another way
// const jane=Object.create(personPrototype,{
//     firstName:{value:'Jane'},
//     lastName:{value:'Good'},
//     age:{value:53}
// });
// console.log(jane);
// console.log(jane.greeting());

}

// ES6 the new way to create object - using class - just like other languages
class Person {
    constructor(firstName,lastName,level){
        this.firstName=firstName;
        this.lastName=lastName;
        this.level=level;
    }
    talk(){
        return `Have we met, ${this.firstName} ${this.lastName}?`;
    }
    upgrade(newLevel){
        this.level=newLevel;
    }

    static eat(){
        return 'yes, people eat!';
    }
}

const tim=new Person('Tim','Wen','Silver');
// console.log(tim.talk());
// tim.upgrade('Diamond');
// console.log(tim);
// console.log(Person.eat());

class Customer extends Person{
    constructor(firstName,lastName,level,ID,region){
        super(firstName,lastName,level);
        this.ID=ID;
        this.region=region;
    }
}

const perry=new Customer('Perry','Johnson','Gold',590,'North');
console.log(perry.talk());
perry.upgrade('Platinum');
console.log(perry);