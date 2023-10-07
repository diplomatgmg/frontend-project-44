#!/usr/bin/env node

import runGame from '../src/index.js';
import { getRandomNumber, getUserAnswer } from './services/service.js';

function evenOrOddGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumber = getRandomNumber();

  console.log(`Question: ${randomNumber}`);

  const userAnswer = getUserAnswer();
  const isEven = randomNumber % 2 === 0;

  const isCorrect = (userAnswer === 'yes' && isEven) || (userAnswer === 'no' && !isEven);
  if (!isCorrect) {
    const correctAnswer = userAnswer === 'yes' ? 'no' : 'yes';
    return { winGame: false, userAnswer, correctAnswer };
  }
  return { winGame: true };
}

runGame(evenOrOddGame);
