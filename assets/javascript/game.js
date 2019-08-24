//array of the alphabet for computer to choose
var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ];

//var to track wins, losses, and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var guessedLetter = null;
//computers random letter choice
var randomGen = letters[Math.floor(Math.random() * letters.length)];
//reset function to restart game
function reset() {
	guessesLeft = 10;
	lettersGuessed = [];
	randomGen = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function (event) {

	var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();

	if (lettersGuessed.indexOf(guessedLetter) < 0 && letters.indexOf(guessedLetter) >= 0) {
		lettersGuessed[lettersGuessed.length] = guessedLetter;
		guessesLeft--;
	}

	// Alert if won and tally wins and reset
	if (randomGen == guessedLetter) {
		alert("You win, " + randomGen + " is correct!");
		wins++;
		reset();
	}
	// alert if lost, tally losses and reset 
	if (guessesLeft === 0) {
		alert("Sorry, you lose, " + randomGen + " was the letter I was thinking of.");
		losses++;
		reset();
	}
	// add variables to html
	document.getElementById("wins").textContent = "Wins: " + wins;
	document.getElementById("losses").textContent = "Losses: " + losses;
	document.getElementById("guessesLeft").textContent = "Guesses left: " + guessesLeft;
	document.getElementById("lettersGuessed").textContent = "Guesses so far: " + lettersGuessed;

}