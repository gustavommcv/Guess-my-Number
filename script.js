'use strict';

let number = newRandomNumber();

console.log(number);

let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function() {

    // If NaN, guess == 0
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (guess == 0) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (!(score <= 1)) {
        if (guess === number) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.highscore').textContent = score;
            document.querySelector('.number').textContent = number;
        }
    
        if (guess < number) {
            document.querySelector('.message').textContent = '📉 Too low!'
            decreaseScore();
        }
            
        if (guess > number) {
            document.querySelector('.message').textContent = '📈 Too high!'
            decreaseScore();
        }

    } else {
        score = 0;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '💥 Game Over!';
        document.querySelector('.number').textContent = number;
    }
});

document.querySelector('.again').addEventListener('click', function() {
    number = newRandomNumber();
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
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
