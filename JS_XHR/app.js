document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // create an XHR object
    const xhr=new XMLHttpRequest();
    // console.log('ReadyState: ', xhr.readyState);

    // open
    xhr.open('GET','data.txt',true);
    // console.log('ReadyState: ', xhr.readyState);
    
    // Optional = used for spinners / loaders
    xhr.onprogress = function(){
        console.log('ReadyState (processing stage): ', xhr.readyState);
    }

    xhr.onload=function(){
        console.log('ReadyState: ', xhr.readyState);
        if(this.status===200){
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror=function(){
        console.log('error occured');
    }

    // old syntax: deprecated!!
    // xhr.onreadystatechange=function(){
    //     console.log('ReadyState: ', xhr.readyState);
    //     if(this.status===200 && this.readyState===4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    // HTTP response:
    // 200: ok
    // 403: forbidden
    // 404: not found
}