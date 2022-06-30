// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.btn'))

// console.log(document.querySelectorAll('.item'));
// const items=document.querySelectorAll('.item');
// items.forEach(item => console.log(item));

const list=document.querySelector('.items');
// list.remove();
// list.lastElementChild.remove();
// list.firstElementChild.textContent='what the hell';
// list.children[1].innerText ='how are you';
// list.children[2].innerHTML='<strong>how are you?</strong>';

const button=document.querySelector('.btn');
// console.log(button)
// button.style.background='pink';
// button.style.fontSize='32px';
// button.style.padding='10 0px';
// button.style.border='dashed 5px green'

// let on=false;
// button.addEventListener('mouseover',(e) => {
//     e.preventDefault();
//     if(on){
//         document.querySelector('#my-form').style.background='lightblue';
//         document.querySelectorAll('.item').forEach((i)=>i.style.background='lightgreen');
//         document.querySelector('body').classList.add('bg-dark');
//         document.querySelector('.items').lastElementChild.innerHTML='<strong>hello</strong>';
//     }
//     else{
//         document.querySelector('#my-form').style.background='';
//         document.querySelectorAll('.item').forEach((i)=>i.style.background='');
//         document.querySelector('body').classList.remove('bg-dark')
//         document.querySelector('.items').lastElementChild.innerHTML='<strong>goodbye</strong>';
//     }
//     on=!on;
// });


const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

form.addEventListener('submit',myFunction);
function myFunction(e){
    e.preventDefault();
    if(nameInput.value===''||email.value===''){
        msg.innerHTML='<strong>name and email can\'t be empty</strong>';
        msg.classList.add('error');
        console.log(msg);
        setTimeout(() => {
            msg.remove();           
            console.log(msg);
        }, 5000);
        
    }else{
        console.log(msg);
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value+' : '+email.value));
        userlist.appendChild(li);
        nameInput.value='';
        email.value='';
    }
}

nameInput.addEventListener('input',onInput)
function onInput(){
    msg.remove();  
}