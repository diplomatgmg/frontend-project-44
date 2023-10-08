import readlineSync from 'readline-sync';

function getRandomNumber({ min = 0, max = 100 } = {}) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ').toString();
}

export { getRandomNumber, getUserAnswer };
