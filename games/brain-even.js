#!/usr/bin/env node

import runGame from '../src/index.js';
import { getGameResult, getRandomNumber, getUserAnswer } from '../services/service-general.js';

function evenOrOddGame() {
  const randomNumber = getRandomNumber();

  console.log(`Question: ${randomNumber}`);

  const isEven = randomNumber % 2 === 0;

  const userAnswer = getUserAnswer();
  const isCorrect = (userAnswer === 'yes' && isEven) || (userAnswer === 'no' && !isEven);
  const correctAnswer = userAnswer === 'yes' ? 'no' : 'yes';

  return getGameResult(isCorrect, userAnswer, correctAnswer);
}

const instructionMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(evenOrOddGame, instructionMessage);
