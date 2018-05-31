var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var lettersGuessed = [];

document.onkeyup = function game() {
    var compLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log(compLetter);

    var guess = event.key;
    
    if (guess > "a" && guess < "z") {
        
        if (guess === compLetter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            numGuesses = 9;
            document.getElementById("guesses").innerHTML = "Remaining Guesses: " + numGuesses;
            lettersGuessed = [];
            document.getElementById("letters").innerHTML = "Letters Guessed: ";
        }

        else {
            numGuesses--;
            document.getElementById("guesses").innerHTML = "Remaining Guesses: " + numGuesses;
            lettersGuessed.push(guess);
            document.getElementById("letters").innerHTML = "Letters Guessed: " + lettersGuessed;

            if (numGuesses < 1) {
                losses++;
                document.getElementById("losses").innerHTML = "Losses: " + losses;
                numGuesses = 9;
                document.getElementById("guesses").innerHTML = "Remaining Guesses: " + numGuesses;
                lettersGuessed = [];
                document.getElementById("letters").innerHTML = "Letters Guessed: " + lettersGuessed;
            }
        }
    }
}