document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e){
    const xhr=new XMLHttpRequest();
    
    xhr.open('GET','customer.json',true);

    xhr.onload=function(){
        //Single json object
        if(this.status===200){
            const customer=JSON.parse(this.responseText);
            const output=`
            <ul>
                <li><b>ID:</b> ${customer.id}</li>
                <li><b>Name:</b> ${customer.name}</li>
                <li><b>Company:</b> ${customer.company}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML=output;
        }
    }
    xhr.send();
}

function loadCustomers(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','customers.json',true);

    xhr.onload=function(){
        // json array
        if(this.status===200){
            const customers=JSON.parse(this.responseText);
            let output='';
            
            customers.forEach(customer => { 
                output+=` 
                <li><b>ID:</b> ${customer.id}</li>
                <li><b>Name:</b> ${customer.name}</li>
                <li><b>Company:</b> ${customer.company}</li>
                <br>
                `           
            });
            output=`<ul class='list'>${output}</ul>`;
            document.getElementById('customers').innerHTML=output;
            console.log(document.querySelector('.list'));
        }
    }
        
    xhr.send();
}
