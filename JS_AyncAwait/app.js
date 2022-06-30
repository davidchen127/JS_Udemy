// async function myFunc(){
//     // return 'hihi';

//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('hi hi hi'), 1000);
//     })

//     const error=true;
//     if(error){
//         await Promise.reject(new Error('fake error'));
//     }else{
//         const res=await promise; // wait until promise is resolved
//     }    

//     return res;
// }

//  myFunc()
//  .then(res=>console.log(res))
//  .catch(err=>console.log(err));


async function getUsers(){
    // await response of the fetch call
    const response= await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed when it's resolved
    const data= await response.json();

    // only proceed when second promise (the data above) is resolved
    return data;
}

getUsers().then(users=>console.log(users));