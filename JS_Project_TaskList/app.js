const form = document.querySelector('#task-form');
const tasklist=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');
const filterBtn=document.querySelector('#filter');

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit',addTask);
    tasklist.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTasks);
    filterBtn.addEventListener('keyup',filterTasks);
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        createTaskNode(task);
    })
}

function createTaskNode(task){
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(task));
    const link=document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    tasklist.appendChild(li);
}

function addTask(e){
    if(taskInput.value===''){
        alert('add a task');
    }else{
        createTaskNode(taskInput.value);
        storeTaskInLocalStorage(taskInput.value);
        taskInput.value='';    
}
    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log(e.target.parentElement.parentElement);
        if(confirm('are you sure to delete?')){
            e.target.parentElement.parentElement.remove();
            removeTaskFromStorage(e.target.parentElement.parentElement);           
        }
    }
}

function removeTaskFromStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(task===taskItem.textContent){
            tasks.splice(index,1)
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearTasks(e){
    // console.time('x');
    // method 1
    // tasklist.innerHTML='';

    // method 2 (faster in performance)
    while(tasklist.firstChild!==null){
        // console.log(tasklist.firstChild.textContent)
        tasklist.removeChild(tasklist.firstChild);
    }
    // console.timeEnd('x');
    clearFromStorage();
}

function clearFromStorage(){
    localStorage.clear();
}

function filterTasks(e){
    const filterText=e.target.value.toLowerCase();
    const tasks=document.querySelectorAll('.collection-item');
    tasks.forEach(function(task){
        // my way
        // if(!task.innerText.includes(filterText)){
        //     task.hidden=true;
        // }else{
        //     task.hidden=false;
        // }

        // teacher's way
        if(task.firstChild.textContent.toLowerCase().indexOf(filterText)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    })
}