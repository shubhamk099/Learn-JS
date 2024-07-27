let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const ourParagraph = document.createElement('p');

let prevGuess = [];
let noOfAttempts = 0;
let playGame = true;


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1 || guess>100){
        alert("Please enter a number between 1 to 100");
    }
    else{
        prevGuess.push(guess);
        displayGuess(guess);
        if(noOfAttempts>=10){
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess==randomNumber){
        displayMessage("You gussed it right");
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage("Number is too low");
    }
    else if(guess>randomNumber){
        displayMessage("Number is too high");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    noOfAttempts++;
    remaining.innerHTML = `${10-noOfAttempts}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame(guess){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    ourParagraph.classList.add('button');
    ourParagraph.innerText = `Start new Game`;
    startOver.appendChild(ourParagraph);
    playGame = false;
    newGame();
}

function newGame(guess){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        noOfAttempts = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10-noOfAttempts}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(ourParagraph);
        playGame = true;
    })    
}