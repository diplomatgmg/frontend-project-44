import readlineSync from 'readline-sync';

function getRandomNumber({ min = 0, max = 100 } = {}) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserAnswer(integer = false) {
  const userAnswer = readlineSync.question('Your answer: ').toString();
  return integer ? Number(userAnswer) : userAnswer;
}

export { getRandomNumber, getUserAnswer };
