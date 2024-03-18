let randomValue = Math.floor(Math.random() * 100 + 1)
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const previousGuesses = document.querySelector('#previousGuesses')
const guessesRemaining = document.querySelector('#guessesRemaining')
const lowOrHigh = document.querySelector('#lowOrHigh')
const p = document.createElement('p')

// let prevGuess = []
let guessCount = 0
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        guessCount++;
        e.preventDefault()
        let guess = parseInt(input.value)
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if (guess < 1 || guess > 100) {
        alert("Please enter a number within the range 1 - 100")
    }
    else {
        // prevGuess.push(guess)
        if (guessCount === 10) {
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomValue}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomValue) {
        displayMessage("Bravo! You guessed it right.")
        endGame()
    } else if (guess < randomValue) {
        displayMessage("You guess is low")
    } else {
        displayMessage("Your guess is High")
        console.log(guess);
    }
}

function displayGuess(guess) {
    input.value = ''
    previousGuesses.innerHTML += `${guess} `
    guessesRemaining.innerHTML = `${10 - guessCount}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}<h2>`    
}

function endGame() {
    input.value = ''
    input.setAttribute('disabled', '')
    // p.classList.add('button') 
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    document.body.querySelector('#container').appendChild(p)
    playGame = false
    startNewGame()
}

function startNewGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function () {
        randomValue = Math.floor(Math.random() * 100 + 1)
        // prevGuess = []
        guessCount = 1
        previousGuesses.innerHTML = ''
        guessesRemaining.innerHTML = `${11 - guessCount}`
        input.removeAttribute('disabled')
        lowOrHigh.innerHTML = ''
        document.body.querySelector('#container').removeChild(p)   
        
        playGame = true
    });
}