
let display = document.getElementById('display-number');
let userInput = document.getElementById('userinput');
let submitBtn = document.getElementById('submitBtn');


var answer = Math.floor(Math.random() * 10) + 1;

function guessTheNumber() {

  do {
    if (userInput.value < answer) {
      display.textContent = 'Higher';
    } else if (userInput.value > answer) {
      display.textContent = 'Lower';
    } else {
      display.textContent = 'Congratulations! You guessed it!';
      setTimeout(function() {
      display.textContent = 'Guess Number 1 - 10';
      // Reset the game or take any necessary actions
      answer = Math.floor(Math.random() * 10) + 1;
    }, 5000);
    }
  } while (userInput.value === answer);
  
}



