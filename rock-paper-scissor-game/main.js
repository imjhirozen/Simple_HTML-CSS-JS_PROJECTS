
const result = document.getElementById("result");
let playerScore = document.getElementById("player1-score");
let computerScore = document.getElementById("computer-score");

const playerDisplayeChoice = document.getElementById("player");
const computerDisplayChoice = document.getElementById("computer");

let pScore = 0;
let cScore = 0;

const choice = ["rock", "paper", "scissors"];


function rock(){
  play("rock");
}

function paper(){
  play("paper");
}

function scissors(){
  play("scissors");
}



function play(playerChoice){
  const computerChoice = choice[Math.floor(Math.random() * 3)];
  let winner = "";

  playerDisplayeChoice.textContent = "PLAYER : " + playerChoice;
  computerDisplayChoice.textContent = "COMPUTER : " + computerChoice;

  if(playerChoice === computerChoice){
    result.style.color = "#4deeea";
    result.textContent = "DRAW";
    
  }else{

    switch(playerChoice){
      case "rock":
        winner = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        winner = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissors":
        winner = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
        break;
    }

    

    if(winner === "YOU WIN"){
      
      result.style.color = "#74ee15";
      result.textContent = winner;
      playerScore.textContent = "PLAYER :" + " " + ++pScore;
    }
    else{
      result.style.color = "#d30000";
      result.textContent = winner;
      computerScore.textContent = "COMPUTER :" + " " + ++cScore;
    }
  }
}

