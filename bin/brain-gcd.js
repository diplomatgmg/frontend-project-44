import runGame from '../src/index.js';
import getGreatestDivisor from './services/brain-gcd-service.js';
import { getRandomNumber, getUserAnswer } from './services/service.js';

function gcdGame() {
  const randomNumberA = getRandomNumber({ min: 1 });
  const randomNumberB = getRandomNumber({ min: 1 });

  const greatestDivisor = getGreatestDivisor(randomNumberA, randomNumberB);

  console.log(`Question: ${randomNumberA} ${randomNumberB}`);

  const userAnswer = getUserAnswer(true);

  if (!(greatestDivisor === userAnswer)) {
    return { winGame: false, userAnswer, correctAnswer: greatestDivisor };
  }
  return { winGame: true };
}

const instructionMessage = 'Find the greatest common divisor of given numbers.';
runGame(gcdGame, instructionMessage);
