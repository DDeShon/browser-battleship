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
    alert("Please enter a valid number between 0 and 6");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("You scored a hit!");

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("You missed! Try again!");
    }
  }
}

var stats =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);
