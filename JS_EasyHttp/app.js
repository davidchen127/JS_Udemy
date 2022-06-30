const http=new easyHttp();

// GET posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err,posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// })

// GET single post
// http.get('https://jsonplaceholder.typicode.com/posts/3',
// function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })

// Post request
// const dataToPost={title: 'yes', body: 'nonesense'}
// http.post('https://jsonplaceholder.typicode.com/posts',dataToPost,function(err,post){
    //     if(err){
        //         console.log(err);
        //     }else{
            //         console.log(post);
            //     }
            // })
 
            
// PUT request
// const dataToPut={title: 'put a data', body: 'it works'}
// http.put('https://jsonplaceholder.typicode.com/posts/3',dataToPut,function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// })

// DELETE request
http.delete('https://jsonplaceholder.typicode.com/posts/5',
function(err,posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
})