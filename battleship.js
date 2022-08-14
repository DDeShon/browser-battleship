var location1 = 2;
var location2 = 3;
var location3 = 4;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number from 0 - 6");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid number");
  } else {
    guesses = guesses + 1;
  }
}
