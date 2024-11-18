'use strict';


const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0El = document.getElementById("score--0")
const score1El = document.getElementById("score--1")
const diceEl  = document.querySelector(".dice")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")

const btnRoll = document.querySelector(".btn--roll")
const btnNew = document.querySelector(".btn--new")
const btnHold = document.querySelector(".btn--hold")

// Starting conditions
let score;
let currentScore;
let activePlayer;
let playing;

// Function to reset game
const init = function () {
    
    
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentScore = 0;
    diceEl.classList.add("hidden");
    
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
    
   
    /*for (let i = 0; i <=1; i++) {
            score[i] = 0;
            document.getElementById(`score--${i}`).textContent = 0
            document.getElementById(`current--${i}`).textContent = 0
    } */
}

init()

const switchPlayer = function () {
    currentScore = 0;
    current0El.textContent = currentScore
    current1El.textContent = currentScore
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    console.log(activePlayer)
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}


// Rolling the dice
btnRoll.addEventListener("click", function () {
    if(playing) {

    
    let dice = Math.trunc(Math.random() * 6) + 1
    // console.log(dice);
    diceEl.src = `dice-${dice}.png`
    
    diceEl.classList.remove("hidden");
    
    if (dice !== 1) {
        currentScore += dice;
        // console.log(currentScore)
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    } else {
        switchPlayer()
    }
    
    }
})

btnHold.addEventListener("click", function () {
    if (playing) {

             score[activePlayer] += currentScore;
             document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
         if (score[activePlayer] >= 10) {
             // if a player wins, we want to assign a player style
             document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
             document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
             diceEl.classList.add("hidden");
             playing = false;
         } else {        
             switchPlayer()
         }
         
    }
   
})


btnNew.addEventListener("click", init
    //function () {
    // score[0] = 0
    // score[1] = 0
    // score0El.textContent = score[0]
    // score1El.textContent = score[0]
    // current0El.textContent = currentScore
    // current1El.textContent = currentScore}
)

