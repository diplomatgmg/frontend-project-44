#!/usr/bin/env node

import runGame from '../src/index.js';
import { getGameResult, getRandomNumber, getUserAnswer } from '../services/service-general.js';
import isPrime from '../services/brain-prime-service.js';

function isPrimeGame() {
  const randomNumber = getRandomNumber({ max: 1000 });
  const randomNumberIsPrime = isPrime(randomNumber);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = getUserAnswer();
  const isCorrect = (userAnswer === 'yes' && randomNumberIsPrime) || (userAnswer === 'no' && !randomNumberIsPrime);
  const correctAnswer = userAnswer === 'yes' ? 'no' : 'yes';

  return getGameResult(isCorrect, userAnswer, correctAnswer);
}

const instructionMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(isPrimeGame, instructionMessage);
