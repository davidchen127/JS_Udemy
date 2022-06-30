// alert('Please take off your shoes!');
// console.log('hi there');

// const age =9;
// console.log('original donut ammount: '+age);

const s='David, John, Jim, Helen';
const age=33;
// const height=177.5;
// const isHere=false;
// const x =null;
// const y=undefined;
// let z;

const person={
    firstname: 'tim',
    lastname: 'williams',
    age: 59,
    job: ['programmer','CEO','thief'],
    others:{
        savings: '200m',
        realEstate: false,
        stock: true,
        criminalRecord:['stealing','smuggling']
    }
}

const work=[
    {
        id:1,
        task:'development',
        duration:5,
        done:false
    },
    {
        id:2,
        task:'after-sale service',
        duration:1,
        done:false
    },
    {
        id:3,
        task:'meeting',
        duration:1,
        done:true
    },
]

// console.log(work[1].task)
const workJSON=JSON.stringify(work);
// console.log(workJSON);

// for(let i=0;i<10;i++){
//     console.log('loop'+i)
// }

// loops
let j=0;
// while(j<10){
//     console.log('while loop '+j);
//     j++;
// }
// do{
//     console.log('do while loop: '+j);
//     j++;
// }while(j<5);
// for(let i=0;i<work.length;i++){
//     console.log(work[i].task);
// }
// for(let sub of work){
//     console.log(sub.task);
// }
// work.forEach(element => {
//     console.log(element.task);
// }); 
// const mapArray = work.map(function(sub){
//     return sub.task;
// });
// console.log(mapArray)
// const filterArray=work.filter(function(sub){
//     return sub.task.includes('s')=== true;
// }).map(function(sub){
//     return sub.task;
// })
// console.log(filterArray)

const x= 55;
const y=20;
// if(x>10 || y <30){
//     console.log('true');
// }else{
//     console.log('false');
// }
// answer=x+y>30? console.log('right'):console.log('wrong');

// switch(x){
//     case 10:
//         console.log(10);
//         break;
//     case 20:
//         console.log(20);
//         break;
//     default:
//         console.log('default');
//         break;
// }

// const addNumbers = (n1,n2=7) => {
//     console.log(n1*n2);
// }

//  addNumbers(2,5);


// const refreshPage=(page,delay=200,requireCredential=false)=>{
//     return null;
// }

// const onClick=(button,link='#')=>{
//     if(button&&link){
//         // open link if button exists
//     }
// }

// const newFn= (num=3) => num;
// console.log(newFn());

// class Person{
//     constructor(firstname,lastname,dob){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.dob=new Date(dob);
//     }
//     getBD_year() {return this.dob.getFullYear()};
//     getFullname() {return this.firstname+' '+this.lastname};
// }

// const p1= new Person('John','Harley','march 2 1990');
// console.log(p1);
// console.log(p1.getFullname());

