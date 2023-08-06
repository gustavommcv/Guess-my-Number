'use strict';

let number = newRandomNumber();
let score = Number(document.querySelector('.score').textContent);
let highScore = document.querySelector('.highscore').textContent;

const displayMessage = function name(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {

    // If NaN, guess == 0
    const guess = Number(document.querySelector('.guess').value);

    if (guess == 0) {
        displayMessage('⛔ No Number!');
    } else if (!(score <= 1)) {
        if (guess === number) {
            displayMessage('🎉 Correct Number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (highScore < score) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            
            document.querySelector('.number').textContent = number;
        } else if (guess !== number) {
            displayMessage(guess > number ?'📈 Too high!' : '📉 Too low!');
            decreaseScore();
        }
    } else {
        score = 0;
        document.querySelector('.score').textContent = score;
        displayMessage('💥 Game Over!');
        document.querySelector('.number').textContent = number;
    }
});

document.querySelector('.again').addEventListener('click', function() {
    number = newRandomNumber();
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
});

function decreaseScore() {
    score--;
    document.querySelector('.score').textContent = score;
}

function newRandomNumber() {
    return Math.floor(Math.random() * 20) + 1
}
