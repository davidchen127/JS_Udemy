function easyHttp(){
    this.http=new XMLHttpRequest();
}

// make an Http GET request
easyHttp.prototype.get=function(url, callback){
    this.http.open('GET',url,true);

let self=this;
this.http.onload=function(){
    if(self.http.status===200){
        callback(null,self.http.responseText);
    }else{
        callback('error code: '+ self.http.status);
    }
}
this.http.send();
}

// make an Http POST request
easyHttp.prototype.post=function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    let self=this;
    this.http.onload=function(){
        callback(null,self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// make an Http PUT request
easyHttp.prototype.put=function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    let self=this;
    this.http.onload=function(){
        callback(null,self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// make an Http DELETE request
easyHttp.prototype.delete=function(url,callback){
    this.http.open('DELETE',url,true);

    let self=this;
    this.http.onload=function(){
        if(self.http.status===200){
            callback(null,'post deleted');
        }else{
            callback('error code: '+self.http.responseText);
        }
    }
    this.http.send();
}