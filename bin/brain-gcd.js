import runGame from '../src/index.js';
import getGreatestDivisor from './services/brain-gcd-service.js';
import { getRandomNumber, getUserAnswer } from './services/service.js';

function gcdGame() {
  const randomNumberA = getRandomNumber(false);
  const randomNumberB = getRandomNumber(false);

  const greatestDivisor = getGreatestDivisor(randomNumberA, randomNumberB);

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${randomNumberA} ${randomNumberB}`);

  const userAnswer = getUserAnswer();

  if (!(greatestDivisor === Number(userAnswer))) {
    return { winGame: false, userAnswer, correctAnswer: greatestDivisor };
  }
  return { winGame: true };
}

runGame(gcdGame);
