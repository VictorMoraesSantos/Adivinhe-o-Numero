let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guessNumber = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const messageDisplay = document.querySelector('.message');
const inputGuess = document.querySelector('.guess');
const scrDisplay = document.querySelector('.score');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const highscoreDisplay = document.querySelector('.highscore');
let scoreValue = 20;
let highscore = 0;

function displayMessage(message) {
  return (messageDisplay.textContent = message);
}

function scoreDisplay(value) {
  return (scrDisplay.textContent = value);
}

function guessNumDisplay(message) {
  return (guessNumber.textContent = message);
}

checkBtn.addEventListener('click', () => {
  const guess = Number(inputGuess.value);

  if (!guess) {
    displayMessage('Sem número!');
  } else if (guess === secretNumber) {
    displayMessage('Número Correto!');
    body.style.backgroundColor = '#60b347';
    guessNumDisplay(secretNumber);
    guessNumber.style.width = '30rem';

    if (scoreValue > highscore) {
      highscore = scoreValue;
      highscoreDisplay.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    inputGuess.value = '';
    if (scoreValue > 1) {
      displayMessage(guess > secretNumber ? 'Muito alto!' : 'Muito baixo!');
      scoreValue--;
      scoreDisplay(scoreValue);
    } else {
      displayMessage('Você perdeu!');
      scoreDisplay(0);
    }
  }
});

againBtn.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue = 20;
  displayMessage('Adivinhe...');
  body.style.backgroundColor = '#222';
  guessNumDisplay('?');
  guessNumber.style.width = '15rem';
  scoreDisplay(scoreValue);
  inputGuess.value = '';
});
