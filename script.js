// create secret number
const secretNumber = 4;
// ask user for guess
const guess = Number(prompt("Guess a number!"));
// check guess
if (guess === secretNumber){
    alert("You got it right.");
}
else if (guess > secretNumber){
    alert("Too high. Guess again!");
}
else {
    alert("Too low. Guess again!");
}
