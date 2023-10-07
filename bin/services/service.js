import readlineSync from 'readline-sync';

function getRandomNumber(canBeZero = true) {
  let randomNumber = Math.floor(Math.random() * 100);
  if (!canBeZero) {
    while (randomNumber === 0) {
      randomNumber = Math.floor(Math.random() * 100);
    }
  }
  return randomNumber;
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ').toString();
}

export { getRandomNumber, getUserAnswer };
