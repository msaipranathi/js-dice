'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function(){
    if(playing) {
        // generate dice roll
        const diceNum = Math.trunc(Math.random() * 6) + 1;

        // display dice
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNum}.png`;
        
        // check for roll 1
        if(diceNum !== 1)
        {
            // add dice to current score
            currentScore = currentScore + diceNum;
            // shows which player
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        }
        else
        {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            currentScore = 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
        }
    }

});

btnHold.addEventListener('click',function(){
    if(playing) {

    
        scores[activePlayer] = scores[activePlayer]
        + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 20)
        {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }
        else
        {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            currentScore = 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');

        }
    }
});

btnNew.addEventListener('click', function(){
    dice.classList.add('hidden');
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active')
    player1.classList.remove('player--active');

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
});

