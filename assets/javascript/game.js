//array of the alphabet for computer to choose
var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ];

//var to track wins, losses, and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = 0;
var letterArray = [];
var randomGen = randomGen;
//computers random letter choice
randomGen = letters[Math.floor(Math.random() * letters.length)];
console.log(randomGen);
//var compChoice = letters[randomGen];

function compChoice() {
	randomGen = letters[Math.floor(Math.random() * letters.length)];
	console.log(randomGen);
}

document.onkeyup = function (event) {

		var userGuess = event.key;

		if (userGuess === randomGen) {
			wins++;
			guessesLeft = 9;
			letterArray = [];
		}

		compChoice();
		if (guessesLeft == 0) {
			losses++;
			guessesLeft = 9;
			letterArray = [];

		} else if (/[a-zA-Z]/.test(userGuess)) {
			guessesLeft--;
			letterArray.push(userGuess);
		}
		document.getElementById("wins").textContent = "Wins: " + wins;
		document.getElementById("losses").textContent = "Losses: " + losses;
		document.getElementById("guessesLeft").textContent = "Guesses left: " + guessesLeft;
		document.getElementById("lettersGuessed").textContent = "Guesses so far: " + letterArray;

	}
		/*function checkGuess(theKey) {
			if (theKey === compChoice) {
				alert("You are correct!")
				wins++;
			} else {
				alert("Try again!");
				guessesLeft--;
			}

		}*/