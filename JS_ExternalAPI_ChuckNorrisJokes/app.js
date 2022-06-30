document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    const xhr=new XMLHttpRequest();
    const number=document.getElementById('number').value;
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload=function(){
        if(this.status===200){
            const response=JSON.parse(this.responseText);
            
            let output='';
            const ul=document.querySelector('.jokes');
            if(response.type==='success'){
                response.value.forEach(joke => {               
                    output+=`
                    <li>ID: ${joke.id}</li>
                    <li>Joke: ${joke.joke}</li>
                    <br>
                    `

                    // Alternative: use createElement and appendChild functions
                    // const id=document.createElement('li');
                    // id.textContent=joke.id;
                    // const text=document.createElement('li');
                    // text.textContent=joke.joke;
                    // ul.appendChild(id).appendChild(text);
                });
            }else{
                output+='<li>Something went wrong while retrieving this joke!</li><br>';
            }
            document.querySelector('.jokes').innerHTML=output;
        }
    }

    xhr.send()

    e.preventDefault();
}