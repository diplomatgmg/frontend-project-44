import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ').toString();
}

export { getRandomNumber, getUserAnswer };
