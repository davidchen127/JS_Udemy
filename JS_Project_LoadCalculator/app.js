document.getElementById('load-form').addEventListener('submit',function(e){
    // hide results
    document.getElementById('results').style.display='none';
    // show loading image
    document.getElementById('loading').style.display='block';
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});


function calculateResults(){
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years=document.getElementById('years');
    
    const monthlyPayment=document.getElementById('monthly-payment');
    const totalPayment=document.getElementById('total-payment');
    const totalInterest=document.getElementById('total-interest');
    
    const principal= parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value)/100/12;
    const calculatedPayments=parseFloat(years.value)*12;
    
    // algorithm to calculate the monthly payment
    const x=Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly= (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);
        document.getElementById('results').style.display='block';
    }else{       
        showError('please check the number');
    }
    document.getElementById('loading').style.display='none'; 
}

function showError(error){
    const errorDiv=document.createElement('div');

    const card=document.querySelector('.card');
    const heading =document.querySelector('.heading');

    // add class
    errorDiv.className='alert alert-danger';
    // create text node
    errorDiv.appendChild(document.createTextNode(error));
    // insert error above the heading
    card.insertBefore(errorDiv,heading);
    // clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}