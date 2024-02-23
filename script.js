// Get elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const userScoreDisplay = document.getElementById('user-score');
const compScoreDisplay = document.getElementById('comp-score');
const message = document.getElementById('msg');

// Initial scores
let userScore = 0;
let compScore = 0;

// Play game function
function playGame(userChoice) {
    // Generate computer choice
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    // Update message
    message.textContent = `You chose ${userChoice}. Computer chose ${compChoice}.`;

    // Determine winner
    if (userChoice === compChoice) {
        message.textContent = 'It\'s a tie!';
    } else if ((userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')) {
        message.textContent = 'You win!';
        userScore++;
    } else {
        message.textContent = 'You lose!';
        compScore++;
    }

    // Update scores on UI
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
}

// Event listeners for user choices
rock.addEventListener('click', function () {
    playGame('rock');
});

paper.addEventListener('click', function () {
    playGame('paper');
});

scissors.addEventListener('click', function () {
    playGame('scissors');
});
