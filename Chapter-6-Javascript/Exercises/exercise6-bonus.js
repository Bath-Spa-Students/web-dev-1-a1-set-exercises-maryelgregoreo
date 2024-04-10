// RGB colors array
var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(128, 128, 128)",
    "rgb(255, 165, 0)",
    "rgb(0, 128, 0)",
];

// variables
var pickedColor; // colors to choose
var numOptions = 3; // number of options
var lives = 0; // number of lives
var score = 0; //  score

// retrieves HTML elements to use for JavaScript
var rgbDisplay = document.getElementById("rgb");
var optionsDiv = document.getElementById("options");
var messageDisplay = document.getElementById("message");
var replayBtn = document.getElementById("replayBtn");


// start the game function
function startGame() {
    lives = 3;
    score = 0;
    messageDisplay.textContent = "";
    replayBtn.style.display = "none";
    generateColorOptions();
}


// generate the color options
function generateColorOptions() {
    optionsDiv.innerHTML = "";

    // picks a random color from the array
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    rgbDisplay.textContent = pickedColor;

    // randomizes the colors
    colors.sort(() => Math.random() - 0.5);

    // creates options divs and assigns colors
    for (let i = 0; i < numOptions; i++) {
        var option = document.createElement("div");
        option.classList.add("option");
        option.style.backgroundColor = colors[i];
        option.addEventListener("click", () => checkAnswer(colors[i]));
        optionsDiv.appendChild(option);
    }
}

// function to check if the clicked color is correct
function checkAnswer(color) {
    if (color === pickedColor) {
        score++;
        messageDisplay.textContent = "Correct!";
        generateColorOptions(); // functions when the player wins
    } else {
        lives--; // decrease lives by 1 when the answer is incorrect
        if (lives === 0) {
            messageDisplay.textContent = "Game Over. Final Score: " + score;
            replayBtn.style.display = "block";
        } else {
            messageDisplay.textContent = "Try Again. Lives Left: " + lives;
        }
    }
}


// start the game initially
startGame();
