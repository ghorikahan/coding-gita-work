// // step-1 ->> html:

// const colorDisplay = document.querySelector('#colorDisplay');
// const messageDisplay = document.querySelector('#message');
// const currentStreakDisplay = document.querySelector('#currentStreak');
// const bestStreakDisplay = document.querySelector('#bestStreak');

// const colorBoxes = document.querySelectorAll('.color-box');
// console.log(colorBoxes);

// const newRoundBtn = document.querySelector('#newRoundBtn');

// const easyBtn = document.querySelector('#easyBtn');
// const hardBtn = document.querySelector('#hardBtn');
// const resetStreakBtn = document.querySelector('#resetStreakBtn');

// const lifeline = document.querySelector('.life-line');
// const heart1 = document.querySelector('.heart1');
// const heart2 = document.querySelector('.heart2');
// const heart3 = document.querySelector('.heart3');

// // varaiables ...

// var currentStreak = 0; //user-> track
// var bestStreak = 0; // previously data fecth -> store
// var pickCorrectColor = 0; // -> random color
// var color = []; // -> empty array -> 6 - color store index - by - index
// var num = 6; // -> loop control

// function webLoad() {
//     onLoad();
//     setGame();
//     displayContent();
// }

// // whenever the website will load then first it will load the entire data ....

// //if there is any chance that that player had played the game then it will compare and then it will give us the high score and the current score...

// // the main reason to add the function is because we know that we have to load the data first ...

// function onLoad() {
//     var temp = localStorage.getItem('highBestStreak');
//     if (temp != null) {
//         bestStreak = parseInt(temp); // -- > here the localstorage contains the data so it will return the data no , if there is any other thing which is stored in temp than parsInt will convert it into integer value...
//     }
//     else {
//         bestStreak = 0; // > if there is no data in localstorage so it wwill retunn null instead of number.
//     }
// }


// // // here we will define the display content message in a function format ..

// function displayContent() {
//     currentStreakDisplay.textContent = currentStreak;
//     bestStreakDisplay.textContent = bestStreak;
// }
// webLoad(); // we had made webload function because we have to call both of the function onload & displaycontent so we had just written these both function in Webload and we had just call the webload ...



// // random color generator

// //here the Math.random is used to generate the random color 

// // Math.floor is used to convert the decimal number into a integer value
// function colorGenerate() {
//     var red = Math.floor(Math.random() * 256);
//     var green = Math.floor(Math.random() * 256);
//     var blue = Math.floor(Math.random() * 256);
//     // console.log('rgb(${a},${b},${c}) );
//     return `rgb(${red}, ${green}, ${blue})`;
// }


// // global variable is a type of variable which can be accesed in any of the code structure means we can access him any where in the code...
// // local variable is a type of variable which can be accesed in the boundry the boundry is curly bracket so thats why we return the variable when the sunction is getting to over ...

// function generateColor(num) {
//     const arr = [];
//     for (var i = 0; i < num; i++) {
//         arr.push(colorGenerate());
//     }
//     return arr;
// }

// function pickGenerator() {
//     const index = Math.floor(Math.random() * color.length);
//     console.log(index);
//     return color[index];
// }

// function setGame() {
//     color = generateColor(num);
//     pickCorrectColor = pickGenerator();
//     // console.log(color);
//     // console.log(pickCorrectColor);
//     colorDisplay.textContent = pickCorrectColor;
//     for (var i = 0; i < color.length; i++) {
//         colorBoxes[i].style.backgroundColor = color[i];
//     }

// }
// webLoad();

// // we will use foreach loop because it is like a dynamic loop it will start form index [0] and it will go upto the array length so it is good for us..

// // === is used to check both the value and the data type of any two numbers ...

// var heart = 3;

// function WinGuess(event) {
//     var tempbox = event.target;
//     if (pickCorrectColor === tempbox.style.backgroundColor) {
//         messageDisplay.textContent = "you Won";
//         setGame();
//         heart = 3;
//         heart1.style.display = 'block';
//         heart2.style.display = 'block';
//         heart3.style.display = 'block';
//     }
//     else {
//         messageDisplay.textContent = "try Again";

//         heart--;
//         if (heart == 2) {
//             heart1.style.display = 'none';
//         }
//         else if (heart == 1) {
//             heart2.style.display = 'none';
//         }
//         else if (heart == 0) {
//             heart3.style.display = 'none';
//         }
//     }
// }

// colorBoxes.forEach((box) => {
//     console.log(box);
//     box.addEventListener('click', WinGuess);
// });

// newRoundBtn.addEventListener('click', function newround() {
//     sessionStorage.clear();
//     setGame();
// });


// ========================================
// DOM Element Selection
// ========================================

const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
const newRoundBtn = document.querySelector('#newRoundBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');


// ========================================
// Game State Variables
// ========================================

let colors = []; // Array to store all color options
let correctColor = ''; // The target color to guess
let currentStreak = 0; // Current consecutive correct guesses
let bestStreak = 0; // All-time best streak
let numColors = 6; // Number of color boxes (3 for easy, 6 for hard)


// ========================================
// Initialize Game
// ========================================

function init() {
    loadBestStreak();
    setupGame();
    updateStreakDisplay();
}


// ========================================
// localStorage Functions
// ========================================

// Load best streak from browser storage
function loadBestStreak() {
    const saved = localStorage.getItem('colorGameBestStreak');

    if (saved !== null) {
        bestStreak = parseInt(saved);
    } else {
        bestStreak = 0;
    }
}

// Save best streak to browser storage
function saveBestStreak() {
    localStorage.setItem('colorGameBestStreak', bestStreak);
}

// Reset best streak
function resetBestStreak() {
    const confirmed = confirm('Are you sure you want to reset your best streak?');

    if (confirmed) {
        bestStreak = 0;
        currentStreak = 0;
        localStorage.removeItem('colorGameBestStreak');
        updateStreakDisplay();
        messageDisplay.innerText = 'Streak reset! Start fresh!';
    }
}


// ========================================
// Color Generation Functions
// ========================================

// Generate random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// Generate array of random colors
function generateColors(num) {
    const colorArray = [];

    for (let i = 0; i < num; i++) {
        colorArray.push(generateRandomColor());
    }

    return colorArray;
}

// Pick random color from array as correct answer
function pickCorrectColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


// ========================================
// Game Setup Functions
// ========================================

// Setup new game round
function setupGame() {
    // Generate new colors
    colors = generateColors(numColors);

    // Pick correct answer
    correctColor = pickCorrectColor();

    // Display RGB value to guess
    colorDisplay.innerText = correctColor.toUpperCase();

    // Reset message
    messageDisplay.innerText = 'Pick a color!';
    messageDisplay.style.color = 'white';

    // Reset and assign colors to boxes
    colorBoxes.forEach(function (box, index) {
        if (index < numColors) {
            // Show box and assign color
            box.style.display = 'block';
            box.style.backgroundColor = colors[index];
            box.classList.remove('fade');
        } else {
            // Hide extra boxes (for easy mode)
            box.style.display = 'none';
        }
    });
}


// ========================================
// Game Logic Functions
// ========================================

// Handle color box click
function handleColorClick(event) {
    const clickedBox = event.target;
    const clickedColor = clickedBox.style.backgroundColor;
    
    // Check if clicked color matches correct answer
    if (clickedColor === correctColor) {
        // Correct answer!
        handleCorrectGuess(clickedBox);
    } else {
        // Wrong answer!
        handleWrongGuess(clickedBox);
    }
}

// Handle correct guess
function handleCorrectGuess(clickedBox) {
    // Update streak
    currentStreak++;

    // Check for new best streak
    if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        saveBestStreak();
        messageDisplay.innerText = '🎉 NEW BEST STREAK! 🎉';
    } else {
        messageDisplay.innerText = 'Correct! 🎯';
    }

    messageDisplay.style.color = '#4ECDC4';

    // Make all boxes show correct color (visual feedback)
    colorBoxes.forEach(function (box) {
        box.style.backgroundColor = correctColor;
    });

    // Change header background to correct color
    document.querySelector('header').style.backgroundColor = correctColor;

    // Update displays
    updateStreakDisplay();

    // Enable new round button
    newRoundBtn.innerText = 'Next Round';
}

// Handle wrong guess
function handleWrongGuess(clickedBox) {
    // Reset current streak
    currentStreak = 0;

    // Update display
    updateStreakDisplay();

    // Fade out wrong box
    clickedBox.classList.add('fade');

    // Show feedback
    messageDisplay.innerText = 'Try Again!';
    messageDisplay.style.color = '#FF6B6B';
}

// Update streak display
function updateStreakDisplay() {
    currentStreakDisplay.innerText = currentStreak;
    bestStreakDisplay.innerText = bestStreak;
}


// ========================================
// Difficulty Mode Functions
// ========================================

// Set easy mode (3 colors)
function setEasyMode() {
    numColors = 3;
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    setupGame();
}

// Set hard mode (6 colors)
function setHardMode() {
    numColors = 6;
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    setupGame();
}

// ========================================
// Event Listeners
// ========================================

// Add click listener to each color box
colorBoxes.forEach(function (box) {
    box.addEventListener('click', handleColorClick);
});

// New round button
newRoundBtn.addEventListener('click', function () {
    setupGame();
    document.querySelector('header').style.backgroundColor = '';
    newRoundBtn.innerText = 'New Round';
});

// Difficulty buttons
easyBtn.addEventListener('click', setEasyMode);
hardBtn.addEventListener('click', setHardMode);

// Reset streak button
resetStreakBtn.addEventListener('click', resetBestStreak);


// ========================================
// Start Game on Page Load
// ========================================

init();
