// Game values

let min=1,
    max=10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

//UI elements
const game=document.querySelector('#game'),
        minNum=document.querySelector('.min-num'),
        maxNum=document.querySelector('.max-num'),
        guessBtn=document.querySelector('#guess-btn'),
        guessInput=document.querySelector('#guess-input'),
        message=document.querySelector('.message');
        
// Assign UI values
minNum.textContent=min;
maxNum.textContent=max;

// Play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
})

function getRandomNum(min,max){
    return Math.floor(Math.random()*10+1);
}

// listen for guess
guessBtn.addEventListener('click',function(e){
    let guess=parseInt(guessInput.value);
    console.log(guess);
    // validate guess
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a valid number between ${min} and ${max}.`,'red');
        return;
    }

    if(guess===winningNum){
        gameOver(true,`${winningNum} is correct! You win!`);
    }else{
        // guess wrong
        guessesLeft-=1;
        guessInput.style.borderColor='red';
        // clear answer
        guessInput.value='';
        if(guessesLeft===0){
            gameOver(false,`Game over, the answer was ${winningNum}`);
        }else{
            setMessage(`${guess} is not correct. you have ${guessesLeft} more guesses left`, 'black');            
        }
    }
})

function gameOver(won,msg){
    let color;
    color=won?'green':'red';
    // set color based on the condition
    guessInput.style.borderColor=color;
    // show winning message
    setMessage(msg, color);
    // disable the input field and button because this round is finished
    guessInput.disabled=true;
    guessBtn.value='Play again';
    guessBtn.className+='play-again';
}

function setMessage(msg,color){
    message.style.color=color;
    message.textContent=msg;
}