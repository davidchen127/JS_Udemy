const posts=[
    {title: 'Post 1', body:'this is post 1.'},
    {title: 'Post 2', body:'this is post 2.'}
];

// Synchronous way
// function createPost(post){
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(() => {
//         let output='';
//         posts.forEach(post => {
//             output+=`
//             <li>${post.title}</li>
//             <li>${post.body}</li>
//             <br>
//             `;
//         });
//         document.getElementById('display').innerHTML=output;
//     }, 1000);
// }

// createPost({title:'Post 3',body:'The newly inserted post'});
// getPosts();

//----------------------------------------------------------------

// Asynchronous way using callback function
// function createPost(post,callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }
    
// function getPosts(){
//     setTimeout(() => {
//         let output='';
//             posts.forEach(post => {
//             output+=`
//             <li>${post.title}</li>
//             <li>${post.body}</li>
//             <br>
//             `;
//         });
//         document.getElementById('display').innerHTML=output;
//     }, 1000);
// }

// createPost({title:'Post 3',body:'The newly inserted post'},getPosts);


// Asynchronous way using "Promises"
function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            posts.push(post);

            // faking an error
            const error=false;
            error?reject('this is the fake error!'):resolve();
        }, 2000);
    })   
}
    
function getPosts(){
    setTimeout(() => {
        let output='';
            posts.forEach(post => {
            output+=`
            <li>${post.title}</li>
            <li>${post.body}</li>
            <br>
            `;
        });
        document.getElementById('display').innerHTML=output;
    }, 1000);
}

createPost({title:'Post 3',body:'The newly inserted post'}).then(getPosts).catch(function(err){
    console.log(err);
});