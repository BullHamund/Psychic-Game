//array of the alphabet for computer to choose
var compChoices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",];

//var to track wins, losses, and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

//computers random letter choice
var randomGen = Math.floor(Math.random() * alphabet.length);
var compChoice = alphabet[randomGen];

console.log(compChoice);

