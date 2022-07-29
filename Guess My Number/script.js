'use strict';
//document.querySelector(".message").textContent ="Hello😉";
//console.log(document.querySelector(".message").textContent);
/*
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value  = 23;
document.querySelector(".guess").value
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check ').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  // console.log(typeof guess);
  if (!guess && score >= 1) {
    document.querySelector('.message').textContent = '⛔ No number';
    score--;
    
    document.querySelector('.score').textContent = score;
  }
   else if (guess === secretNumber && score >= 1) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = 'green';
    // document.querySelector("body").style.backgroundColor= "blue";

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } 
  
  else if (guess < secretNumber && score >= 1) {
    document.querySelector('.message').textContent = '📉Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  } 
  
  
  else if (guess > secretNumber && score >= 1) {
    document.querySelector('.message').textContent = '📈Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } 
  
  
  else if (score == 0) {
    document.querySelector('.message').textContent = '💥 You lost the game..!!';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
