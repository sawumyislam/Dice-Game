'use strict';

// Seltected element
const newGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
let dice = document.querySelector('.dice');

//first player object
const player1Name = document.getElementById('name--0');
let player1Score = document.getElementById('score--0');
let plyaer1CurrentScore = document.getElementById('current--0');
const player1 = document.querySelector('.player--0');

//second player object
const player2Name = document.getElementById('name--1');
let player2Score = document.getElementById('score--1');
let plyaer2CurrentScore = document.getElementById('current--1');
const player2 = document.querySelector('.player--1');

// hide the dice at first
dice.classList.add('hidden');

// For showing dice image
const showImage = function () {
  dice.classList.remove('hidden');
};

// Global variable
let sumCurrentScore = 0;
let activePlayer = 0;
let winner = [0, 0];

// Roll Dice button
btnRollDice.addEventListener('click', function () {
  let generateDiceValue = Math.trunc(Math.random() * 6 + 1);

  // Another way of roll dice is | dice.src = 'dice-${dice}.png';
  switch (generateDiceValue) {
    case 1:
      showImage();
      dice.src = 'image/dice-1.png';
      break;
    case 2:
      showImage();
      dice.src = 'image/dice-2.png';
      break;
    case 3:
      showImage();
      dice.src = 'image/dice-3.png';
      break;
    case 4:
      showImage();
      dice.src = 'image/dice-4.png';
      break;
    case 5:
      showImage();
      dice.src = 'image/dice-5.png';
      break;
    case 6:
      showImage();
      dice.src = 'image/dice-6.png';
      break;
  }
  // this set need to be changed
  if (generateDiceValue !== 1) {
    sumCurrentScore += generateDiceValue;
    document.getElementById(`current--${activePlayer}`).textContent =
      sumCurrentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent =
      sumCurrentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

// Hold Buttion
hold.addEventListener('click', function () {
  if (activePlayer === 0) {
    player1Score.textContent = winner[0] += sumCurrentScore;
    plyaer1CurrentScore.textContent = sumCurrentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  } else if (activePlayer === 1) {
    player2Score.textContent = winner[1] += sumCurrentScore;
    plyaer2CurrentScore.textContent = sumCurrentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
  let i = 0;
  while (winner[i] >= 100) {
    alert(winner[i]);
    break;
  }
});

// New Game
newGame.addEventListener('click', function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  plyaer1CurrentScore.textContent = 0;
  plyaer2CurrentScore.textContent = 0;
  dice.classList.add('hidden');
});
