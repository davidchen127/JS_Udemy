class EasyHttp{
    // make an HTTP GET request
    get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))       
        })
    }

    // make an HTTP POST request
    post(url,input){
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(input)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))       
        })
    }

        // make an HTTP PUT request
        put(url,updatedInfo){
            return new Promise((resolve, reject)=>{
                fetch(url,{
                    method:'PUT',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(updatedInfo)
                })
                .then(res=>res.json())
                .then(data=>resolve(data))
                .catch(err=>reject(err))       
            })
        }

        // make an HTTP DELETE request
        delete(url){
            return new Promise((resolve, reject)=>{
                fetch(url,{
                    method:'DELETE',
                    headers:{
                        'Content-type':'application/json'
                    },
                })
                .then(res=>res.json())
                .then(()=>resolve('user removed!'))
                .catch(err=>reject(err))       
            })
        }
}