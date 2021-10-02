const answers = document.querySelectorAll('button');
const message = document.querySelector('#message');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const result = document.querySelector('#result');


let humanScore = 0;
let computerScore = 0;

function disableButtons() {
  answers.forEach(answer => {
    answer.disabled = true
  })
}


function computerPlay() {
  let choice = ['ROCK', 'PAPER', 'SCISSORS'];
  let number = Math.floor(Math.random() * 3);
  return choice[number];
}

function playRound(human) {

  let computer = computerPlay();
  if (human === computer) {
    message.innerText = 'Man and Machine Tied';
  }
  else if ((human === 'ROCK' && computer === 'SCISSORS') ||
    (human === 'PAPER' && computer === 'ROCK') ||
    (human === 'SCISSORS' && computer === 'PAPER')) {
    message.innerText = 'Man beat Machine';
    humanScore += 1;
    score1.innerText = humanScore;
    if (humanScore === 5) {
      disableButtons();
      result.innerText = 'Man won the Game';
    }
  } else {
    message.innerText = 'Machine beat Man';
    computerScore += 1;
    score2.innerText = computerScore;
    if (computerScore === 5) {
      disableButtons();
      result.innerText = 'Machine won the Game';
    }
  }
}







answers.forEach(answer => {
  answer.addEventListener('click', () => {
    playRound(answer.value);
  })
})


























