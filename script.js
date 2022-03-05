'use strict';

/*console.log(document.querySelector('.message').textContent);

//DOM : document object model

document.querySelector('.message').textContent = 'Correct number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));*/

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (guess > 0 && guess < 51) {
    if (guess === secretNumber) {
      if (score > 1) {
        displayMessage('Correct number!');
        // document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else {
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('body').style.backgroundColor = '#60b330';
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        if (guess > secretNumber) {
          if (guess - secretNumber < 5) {
            document.querySelector('.message').textContent = 'a bit high!';
          } else {
            document.querySelector('.message').textContent = 'Too high!';
          }
        } else if (guess < secretNumber) {
          if (secretNumber - guess < 5) {
            document.querySelector('.message').textContent = 'a bit low!';
          } else {
            document.querySelector('.message').textContent = 'Too low!';
          }
        }
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#60b330';
      }
    }
  } else {
    document.querySelector('.message').textContent = 'Enter the valid number!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing....';
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
