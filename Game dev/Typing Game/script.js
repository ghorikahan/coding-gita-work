// //DOM Elements
// const textDisplay = document.querySelector('#textDisplay');
// const typingArea = document.querySelector('#typingArea');
// const timerDisplay = document.querySelector('#timer');
// const wpmDisplay = document.querySelector('#wpm');
// const accuracyDisplay = document.querySelector('#accuracy');
// const bestWPMDisplay = document.querySelector('#bestWPM');
// const startBtn = document.querySelector('#startBtn');
// const resetBtn = document.querySelector('#resetBtn');

// //test texts
// const testTexts = [
//     "The quick brown fox jumps over the lazy dog. practice makes perfect when learning to type faster.",
//     "Technology has revolutionized the way we communicate and work in the modern digital era.",
//     "typing speed is an essential skill for anyone working with computers in today's workplace"
// ];

// //Game state
// let currentText = '';
// let timeLeft = 60;
// let timerInterval = null;
// let startTime = null;
// let isTestActive = false;
// let bestWPM = 0;

// function webLoad() {
//     onLoad();
//     displayContent();
// }



// function onLoad() {
//     var temp = sessionStorage.getItem('getHighWpm');
//     if (temp != null) {
//         bestWPM = parseInt(temp);
//     }
//     else {
//         bestWPM = 0;
//     }
// }
// function displayContent() {
//     timerDisplay.textContent = timeLeft;
//     bestWPMDisplay.textContent = bestWPM;
// }

// webLoad();

// function endGame() {
//     clearInterval(timerInterval);
//     timeLeft = 60;
//     startBtn.disabled = false;
//     displayContent();
// }

// function saveBestWPM(wpm){
//     if(wpm > bestWPM){
//         bestWPM = wpm;
//         sessionStorage.setItem('typingTestBestWPM',bestWPM);
//         bestWPMDisplay.innerHTML = bestWPM;
//     }
// }

// function startGame() {
//     timeLeft = 60;
//     startBtn.disabled = true;

//     currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
//     textDisplay.textContent = currentText;

//     typingArea.disabled = false;
//     typingArea.value = "";
//     typingArea.setAttribute('placeholder', 'Game started , start typing');

//     timerInterval = setInterval(function () {
//         timeLeft--;
//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             endGame();
//         }
//         displayContent();
//     }, 1000);
// }

// function updateStatus(){
//     var typed = typingArea.value;
//     const minute = Math.floor(((Date.now()-startTime)/1000)/60);
//     const word = typed.trim().split(/\s+/).filter(w => w.length > 0);
//     const wpm = minute > 0 ? Math.floor(word.length / minute): 0;
//     wpmDisplay.textContent = wpm;

//     var currentScore = 0;
//     for(var i = 0 ; i<currentScore.length ; i++){
//         if(currentText[i] === typed[i]){
//             currentScore++;
//         }
//     }

//     // const accuracy = 
// }

// function highLight(){
//     var typed = typingArea.value;
//     var highText = '';
//     for(let i=0;i<currentText.length;i++){
//         if(i<typed.length){
//             if(currentText[i]===typed[i]){
//                 highText += `<span class="correct">${currentText[i]}</span>`; 
//             }
//             else{
//                 highText += `<span class="correct">${currentText[i]}</span>`; 
//             }
//         }
//         else{
//             highText += currentText[i];
//         }
//     }
//     textDisplay.innerHTML = highlightText;  
// }

// function typeControl() {
//     if (startTime == null) {
//         startTime = Date.now();
//     }
//     console.log(startTime);
//     updateStatus();
//     highLight();
// }

// startBtn.addEventListener('click', startGame);

// typingArea.addEventListener('input', typeControl);



// const textDisplay = document.querySelector('#textDisplay');
// const typingArea = document.querySelector('#typingArea');
// const timerDisplay = document.querySelector('#timer');
// const wpmDisplay = document.querySelector('#wpm');
// const accuracyDisplay = document.querySelector('#accuracy');
// const bestWPMDisplay = document.querySelector('#bestWPM');
// const startBtn = document.querySelector('#startBtn');
// const resetBtn = document.querySelector('#resetBtn');



// const testTexts = [
//     "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster",
//     "Technology has revolutionizes the way we communicate and work in the modern digital era.",
//     "Typing speed is an essential skill for anyone working with computers in today's workplace.",
// ];


// // Game State
// let currentText = '';  // random statement from the above 3 statements
// let timeLeft = 60;
// let timerInterval = null;
// let startTime = null;
// let isTestActive = false;
// let bestWPM = 0;
// let wpm = 0;


// // Step-1 Dataload  and DisplayContent and one func to call both of them
// webLoad();

// function webLoad() {
//     onLoad();
//     displayContent();
// }


// function onLoad() {
//     var temp = sessionStorage.getItem('getHighWpm');
//     if(temp != null){
//         bestWPM = parseInt(temp);
//     }
//     else{
//         bestWPM = 0;
//     }
// }

// function displayContent() {
//     timerDisplay.textContent = timeLeft;
//     bestWPMDisplay.textContent = bestWPM;
// }


// //step-2 Start btn and time decrease and eventlistner 


// function startGame(){
//     timeLeft = 60;
//     startBtn.disabled = true;



//     typingArea.disabled = false;
//     typingArea.value = "";
//     typingArea.setAttribute('placeholder','Now the Game is Started , Type Fasttt !!!');



//     currentText = testTexts[Math.floor(Math.random()*testTexts.length)];
//     textDisplay.textContent = currentText;

//     timerInterval = setInterval(function(){
//         timeLeft--;
//         if(timeLeft <= 0){
//            endGame();
//         }
//         displayContent();
//     },1000);
// }


// function updateStatus() {
//     var typed = typingArea.value;   //gives user input value
//     const minute = Math.floor(Date.now()-startTime) /1000/60;
//     const word = typed.trim().split(/\s+/).filter(w => w.length >0);
//      wpm = minute > 0 ? Math.floor(word.length / minute): 0;   // ternary operator
//     wpmDisplay.textContent = wpm;
//     // console.log(wpm);

//     var currentScore = 0;
//     for(let i = 0; i < currentText.length; i++) {
//         if(currentText[i]===typed[i])
//         {
//             currentScore++;
//         }
//     }
//     const accuracy = (typed.length>0) ? Math.floor(currentScore / typed.length *100) : 0;
//     accuracyDisplay.textContent = accuracy;

// }


// function endGame() {
//     clearInterval(timerInterval)
//     timeLeft = 60;
//     startBtn.disabled = false;
//     typingArea.disabled = true;

//     if(wpm > bestWPM)
//     {
//         bestWPM = wpm;
//         sessionStorage.setItem('getHighWpm',bestWPM);
//         // bestWPMDisplay.textContent = bestWPM;
//         alert(`Scored high score than the previous one`);
//     }
//     else{
//         alert("Your Score is :"+ wpm);
//     }
//     wpm = 0;
//     wpmDisplay.textContent = wpm;
//     typingArea.textContent = true;
//     typingArea.value = "";
//     displayContent();
// }


// function typeControl() {
//     if(startTime == null)
//     {
//        startTime = Date.now();
//     }
//     updateStatus();
//     Highlights();
//     // console.log(startTime);
// }


// function Highlights() {
//     var typed = typingArea.value;
//     var highlightText = '';  // empty string to display color

//     for (let i = 0; i < currentText.length; i++) {
//         if(i < typed.length)    // we have to give color to those where user have typed only
//         {
//             if(currentText[i] === typed[i])
//             {
//                 highlightText += <span class="correct">${currentText[i]}</span>  
//             }
//             else{
//                 highlightText += <span class="incorrect">${currentText[i]}</span>  
//             }
//         }
//         else{
//             highlightText += currentText[i]   // remaining to type by the user
//         }
//     }
//     textDisplay.innerHTML = highlightText;
// }


// // function continueGame() {
// //     if(timer > 10 && currentText[i]===currentText.length)
// //     {
// //         currentText = testTexts[Math.floor(Math.random()*testTexts.length)];
// //     }
// // }


// startBtn.addEventListener('click', startGame);

// typingArea.addEventListener('input' , typeControl);

// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

// Test Texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

// On page load
function webLoad() {
    onLoad();
    displayContent();
}

function onLoad() {
    const temp = sessionStorage.getItem('typingTestBestWPM');
    bestWPM = temp ? parseInt(temp) : 0;
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

webLoad();

// Save Best WPM
function saveBestWPM(wpm) {
    if (wpm > bestWPM) {
        bestWPM = wpm;
        sessionStorage.setItem('typingTestBestWPM', bestWPM);
        bestWPMDisplay.textContent = bestWPM;
    }
}

// Start Game
function startGame() {
    timeLeft = 60;
    startBtn.disabled = true;
    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Game started! Start typing...');
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = "0%";
    startTime = null;

    // Choose a random text
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;

    // Start countdown
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// End Game
function endGame() {
    clearInterval(timerInterval);
    typingArea.disabled = true;
    startBtn.disabled = false;
    typingArea.setAttribute('placeholder', 'Time up! Click start to try again.');

    const finalWPM = parseInt(wpmDisplay.textContent);
    saveBestWPM(finalWPM);
}

// Update WPM + Accuracy
function updateStatus() {
    const typed = typingArea.value;
    const minutes = (Date.now() - startTime) / 60000; // ms → minutes
    const words = typed.trim().split(/\s+/).filter(w => w.length > 0);
    const wpm = minutes > 0 ? Math.floor(words.length / minutes) : 0;
    wpmDisplay.textContent = wpm;

    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
        if (currentText[i] === typed[i]) correctChars++;
    }
    const accuracy = (correctChars / currentText.length) * 100;
    accuracyDisplay.textContent = accuracy.toFixed(1) + "%";
}

// Highlight Correct/Incorrect Characters
function highLight() {
    const typed = typingArea.value;
    let highText = '';
    for (let i = 0; i < currentText.length; i++) {
        if (i < typed.length) {
            if (currentText[i] === typed[i]) {
                highText += `<span class="correct">${currentText[i]}</span>`;
            } else {
                highText += `<span class="incorrect">${currentText[i]}</span>`;
            }
        } else {
            highText += currentText[i];
        }
    }
    textDisplay.innerHTML = highText;
}

// Typing Control
function typeControl() {
    if (startTime == null) {
        startTime = Date.now();
    }
    updateStatus();
    highLight();
}

// Reset Game
function resetGame() {
    clearInterval(timerInterval);
    timeLeft = 60;
    startTime = null;
    typingArea.value = "";
    typingArea.disabled = true;
    startBtn.disabled = false;
    textDisplay.textContent = "Click 'Start' to begin the typing test.";
    timerDisplay.textContent = timeLeft;
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = "0%";
    typingArea.setAttribute('placeholder', 'Start a new test');
}

// Event Listeners
startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', typeControl);
resetBtn.addEventListener('click', resetGame);