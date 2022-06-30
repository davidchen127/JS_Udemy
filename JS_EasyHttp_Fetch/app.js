const http=new EasyHttp();

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data=>console.log(data))
.catch(err=>console.log(err));


// Post - add user
const user={username:'Johnson', website:'gg.com'}
http.post('https://jsonplaceholder.typicode.com/users',user)
.then(data=>console.log(data))
.catch(err=>console.log(err));


// PUT - update user
const update={id:'3', website:'noname.com'}
http.put('https://jsonplaceholder.typicode.com/users/3',update)
.then(data=>console.log(data))
.catch(err=>console.log(err));


// DELETE - remove user
http.delete('https://jsonplaceholder.typicode.com/users/5')
.then(data=>console.log(data))
.catch(err=>console.log(err));