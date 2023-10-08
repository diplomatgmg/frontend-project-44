#!/usr/bin/env node

import runGame from '../src/index.js';
import getGreatestDivisor from '../services/brain-gcd-service.js';
import { getGameResult, getRandomNumber, getUserAnswer } from '../services/service-general.js';

function gcdGame() {
  const randomNumberA = getRandomNumber({ min: 1 });
  const randomNumberB = getRandomNumber({ min: 1 });

  const greatestDivisor = getGreatestDivisor(randomNumberA, randomNumberB);

  console.log(`Question: ${randomNumberA} ${randomNumberB}`);

  const userAnswer = getUserAnswer(true);
  const isCorrect = greatestDivisor === userAnswer;

  return getGameResult(isCorrect, userAnswer, greatestDivisor);
}

const instructionMessage = 'Find the greatest common divisor of given numbers.';
runGame(gcdGame, instructionMessage);
