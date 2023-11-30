let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guessNumber = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const messageDisplay = document.querySelector('.message');
const inputGuess = document.querySelector('.guess');
const scoreDisplay = document.querySelector('.score');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const highscoreDisplay = document.querySelector('.highscore');
let scoreValue = 20;
let highscore = 0;

checkBtn.addEventListener('click', () => {
  const guess = Number(inputGuess.value);

  if (!guess) {
    messageDisplay.textContent = 'Sem número!';
  } else if (guess === secretNumber) {
    messageDisplay.textContent = 'Número Correto!';
    body.style.backgroundColor = '#60b347';
    guessNumber.textContent = secretNumber;
    guessNumber.style.width = '30rem';

    if (scoreValue > highscore) {
      highscore = scoreValue;
      highscoreDisplay.textContent = highscore;
    }
  } else if (guess > secretNumber) {
    inputGuess.value = '';
    if (scoreValue > 1) {
      messageDisplay.textContent = 'Muito alto!';
      scoreValue--;
      scoreDisplay.textContent = scoreValue;
    } else {
      messageDisplay.textContent = 'Você perdeu!';
      scoreDisplay.textContent = 0;
    }
  } else if (guess < secretNumber) {
    inputGuess.value = '';
    if (scoreValue > 1) {
      messageDisplay.textContent = 'Muito baixo!';
      scoreValue--;
      scoreDisplay.textContent = scoreValue;
    } else {
      messageDisplay.textContent = 'Você perdeu!';
      scoreDisplay.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue = 20;
  messageDisplay.textContent = 'Adivinhe...';
  body.style.backgroundColor = '#222';
  guessNumber.textContent = '?';
  guessNumber.style.width = '15rem';
  scoreDisplay.textContent = scoreValue;
  inputGuess.value = '';
});
