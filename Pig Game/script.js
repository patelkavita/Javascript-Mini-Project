'use strict';
// selecting elements
const player0El= document.querySelector('.player--0');
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting condition
 let scores=[];
 let currentScore, activePlayer, playing;

const init = function()
{
     scores = [0,0];
      currentScore = 0;
      activePlayer = 0;
 playing = true;

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
}

init();
 const switchPlayer = function()
 {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer===0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle("player--active");
 }

// Rolling dice functionality
btnRoll.addEventListener("click",function()
{
    if(playing)
    {
 // 1. generating a random dice roll
 const dice = Math.trunc(Math.random()*6)+1;
//  console.log(dice);

  //2. display the dice
  diceEl.classList.remove('hidden');
  diceEl.src =`dice-${dice}.png`;
  
  // check for rolled 1: if true: switch to next player
if(dice!==1)
{
//Add dice to current score
currentScore = currentScore+dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
// current0El.textContent = currentScore; //change later
}
else{
  //switch to next player
  
  switchPlayer();
}
    }
   
});

//Holding the dice
btnHold.addEventListener('click',function()
{
    if(playing)
    {
 //1. Add current Score to active Player
// scores[1] = scores[1]+currentScore;
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
// 2. check if player'score is >=100

 if(scores[activePlayer]>=100)
 {
    playing=false;
//finish the game
//  document.querySelector(".player--Winner")
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
diceEl.classList.add('hidden');
 }
   // 3. switch to the next player

 else{
    switchPlayer();
 }
    }    
})


// resetting game
btnNew.addEventListener('click',init);

