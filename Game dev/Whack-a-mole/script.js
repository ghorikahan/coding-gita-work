// const scoreDisplay = document.querySelector('#score');
// const timeLeftDisplay = document.querySelector('#timeLeft');
// const maxScoreDisplay = document.querySelector('#maxScore');
// const startBtn = document.querySelector('#startBtn');
// const holes = document.querySelectorAll('.hole');
// console.log(holes);
// const moles = document.querySelectorAll('.mole');


// // Required Variables
// var score = 0;
// var time = 30;
// var bestScore = 0;
// var playGame = false; // we write here false so wehn the user click here then then we will make the button disable... 
// var gameId = null;

// function webLoad() {
//     onLoad();
//     displaycontent();
// }

// // step-2 1.phase load the entire data

// function onLoad() {
//     var temp = localStorage.getItem('highScoreGame');

//     if (temp != null) {
//         bestScore = temp;
//     }
//     else {
//         bestScore = 0;
//     }
// };

// // step-2 2. Reflecting the actual vale in rhe required html element sing textcontent.

// function displaycontent() {
//     scoreDisplay.textcontent = score;
//     timeLeftDisplay.textcontent = time;
//     maxScoreDisplay.textcontent = bestScore;
// }

// // calling webLoad function here 

// webLoad();
// //Random time generator implementation 
// function randomTimeGenerator(min, max) {
//     return Math.floor(Math.random() * (max - min) + max);
// }

// //random index which will return the distinct element...
// function randomIndex() {
//     var index = Math.floor(Math.random() * holes.length);
//     return holes[index];
// }

// //pop game implementation for  image appear and disappear purpose...
// function popImageGame() {
//     var randomTime = randomTimeGenerator(500, 1500);
//     var hole = randomIndex();
//     var mole = hole.querySelector('.mole');
//     moles.classList.add('up');
//     setTimeout(function () {
//         mole.
//             popImageGame();
//     }, randomTime);
// }

// function endGame() {
//     clearInterval(gameId);

//     if (score > bestscore) {
//         bestScore = score;
//         localStorage.setItem('highScoreGame', bestScore);
//         alert(`your score is higher hthan the previous one: ${score}`);
//     }
//     else {
//         alert(`your score is: ${score}`);
//     }
//     score = 0;
//     displaycontent();
//     startBtn.disabled = false;
// }

// //actual implimentation of start game

// function startGame() {
//     startBtn.disabled = 'true';
//     // disabled -> true which means button is disabled.....

//     popImageGame();
//     gameId = setInterval(function () {
//         time--;
//         if (time == 0) {
//             startBtn.disabled = false;
//             endgame();
//         }
//         displaycontent();
//     }, 1000);
// }

// //ADD EVENT LISTNER PART:

// startBtn.addEventListener('click', startGame);

const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
// FIX: Use querySelectorAll to get ALL holes and moles
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');

// Required Variables
var score = 0;
var time = 30; // Your default time
var bestScore = 0;
var playGame = false; // This will control the game loop
var gameId = null; // For the timer interval
var lastHole; // To make sure the same hole doesn't come up twice

function webLoad() {
    onLoad();
    displaycontent();
}

// step-2 1.phase load the entire data
function onLoad() {
    var temp = localStorage.getItem('highScoreGame');
    if (temp != null) {
        bestScore = temp;
    } else {
        bestScore = 0;
    }
}

// step-2 2. Reflecting the actual vale
function displaycontent() {
    // FIX: Spelled textContent correctly (camelCase)
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
}

// calling webLoad function here
webLoad();

//Random time generator implementation 
function randomTimeGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // Fix: (max - min) + min
}

//random index which will return the distinct element...
function randomIndex(holes) {
    var index = Math.floor(Math.random() * holes.length);
    var hole = holes[index];

    // Prevent the same hole twice in a row
    if (hole === lastHole) {
        return randomIndex(holes);
    }
    lastHole = hole;
    return hole;
}

//pop game implementation for image appear and disappear purpose...
function popImageGame() {
    var randomTime = randomTimeGenerator(500, 1500);
    var hole = randomIndex(holes); // Pass in the 'holes' list
    var mole = hole.querySelector('.mole'); // Get the mole inside that specific hole

    // FIX: Add 'up' class to the SPECIFIC mole, not the whole list
    mole.classList.add('up');

    setTimeout(function () {
        // FIX: Remove 'up' class from that same mole
        mole.classList.remove('up');
        // FIX: Only continue if the game is still active
        if (playGame) {
            popImageGame();
        }
    }, randomTime);
}

function endGame() {
    clearInterval(gameId);
    playGame = false; // FIX: Set game state to false

    // FIX: Spelled bestScore correctly
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('highScoreGame', bestScore);
        alert(`New High Score! ${score}`);
    } else {
        alert(`Game Over! Your score: ${score}`);
    }
    // FIX: Move score = 0 to startGame to reset properly
    displaycontent(); // Update display with final scores
    startBtn.disabled = false;
}

//actual implimentation of start game
function startGame() {
    // FIX: Reset game variables at the START
    score = 0;
    time = 30; // Reset time
    playGame = true;
    displaycontent(); // Update the display with reset values

    // FIX: Use boolean 'true', not string 'true'
    startBtn.disabled = true;

    popImageGame(); // Start the mole popping loop

    gameId = setInterval(function () {
        time--;
        timeLeftDisplay.textContent = time; // Update time display every second
        if (time == 0) {
            // FIX: Spelled endGame correctly
            endGame();
        }
        // No need for displaycontent() here, just update time
    }, 1000);
}

// --- MISSING LOGIC: SCORING ---

// This function runs when a mole is clicked
function bonk(e) {
    // e.isTrusted checks if this was a real click, not a fake one
    if (!e.isTrusted) return;
    score++;
    if(score>7){
        scoreDisplay.style.color = "gold";
    }
    this.classList.remove('up'); // Hide the mole immediately
    scoreDisplay.textContent = score; // Update score display
}

// FIX: Add the click event listener to every single mole
moles.forEach(mole => mole.addEventListener('click', bonk));

//ADD EVENT LISTNER PART:
startBtn.addEventListener('click', startGame);

function resetBtn() {
    localStorage.clear();
}

bonk();