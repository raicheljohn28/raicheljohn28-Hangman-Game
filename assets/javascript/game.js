
window.onload = function() {
//Global Variables

var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["cat", "coyotes", "baboon", "hyena", "penguin", "elephant"];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

//Functions

function reset() {
    choosenWord = words[Math.floor(Math.random() * words.length)];

    //Split the choosen word to letters
    lettersInWord = choosenWord.split('');

    //Get the number of blanks
    numBlanks = lettersInWord.length;

    //Reset
    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccess = [];
    availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    test = false;
    startGame();
}

function startGame() {
    choosenWord = words[Math.floor(Math.random() * words.length)];

    //Split the choosen word to letters
    lettersInWord = choosenWord.split('');

    //Get the number of blanks
    numBlanks = lettersInWord.length;

    //Reset
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccess = [];
    availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //Fill the blanks with letters guessed

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccess.push('_');
        console.log("blanksandSuccess: ", blanksAndSuccess);
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccess;
    }

    document.getElementById('wordToGuess').innerHTML = blanksAndSuccess.join(' ');
    document.getElementById('numGuess').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('loseCounter').innerHTML = loseCount;
    document.getElementById('wrongGuess').innerHTML = wrongLetters;

    //Debugging
    console.log(choosenWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccess);
}

function compareLetters(userKey) {
    console.log('Is Working');
    //User Guess
    if (choosenWord.indexOf(userKey) > -1) {
        for (var i = 0; i < numBlanks; i++) {
            if (lettersInWord[i] === userKey) {
                rightGuessCounter++;
                blanksAndSuccess[i] = userKey;
                console.log('blanksand:', blanksAndSuccess);
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccess.join(' ');
            }
        }
        console.log(blanksAndSuccess);
    }
    //Wrong Guess
    else {
        wrongLetters.push(userKey);
        guessesLeft--;
        //Change the HTML
        document.getElementById('numGuess').innerHTML = guessesLeft;
        document.getElementById('wrongGuess').innerHTML = wrongLetters;

        //Debug
        console.log('Wrong Letters = ' + wrongLetters);
        console.log('Guesses left are = ' + guessesLeft);
    }
}

function winLose() {
    //Right guess you win
    if (rightGuessCounter === numBlanks) {
        console.log(rightGuessCounter);
        winCount++;
        document.getElementById('winCounter').innerHTML = winCount;
        alert('HURRAY!! You Won the game!');
        reset();
    }
    //Wrong guess you lose
    else if (guessesLeft === 0) {
        loseCount++;
        document.getElementById('loseCounter').innerHTML = loseCount;
        alert('OOPS! You lose');
        reset();
    }
}

//Initiate the code


document.onkeyup = function (event) {
    console.log(event.key)
    test = true;
    var letterGuessed = event.key;
    for (var j = 0; j < availableLetters.length; j++) {
        if (letterGuessed === availableLetters[j] && test === true) {
            // var spliceWord = availableLetters.splice(j,1);
            console.log('The word is = ' + availableLetters[j]);
            // console.log('Spliced word is = ' + spliceWord);

            compareLetters(letterGuessed);
            winLose();
        }
    }

}
startGame();

}

