#!/usr/bin/env node

import { getGameResult, getRandomNumber, getUserAnswer } from '../services/service-general.js';
import getProgressionArray from '../services/brain-progression-service.js';
import runGame from '../src/index.js';

function progressionGame() {
  // Что, Самат, думали я не исправлю следующую строчку?)
  const progressionArray = getProgressionArray();

  const randomIndexProgression = getRandomNumber(1, 9);
  const randomNumberProgression = progressionArray[randomIndexProgression];

  progressionArray[randomIndexProgression] = '..';

  console.log('Question:', progressionArray.join(' '));

  const userAnswer = getUserAnswer(true);
  const isCorrect = randomNumberProgression === userAnswer;

  return getGameResult(isCorrect, userAnswer, randomNumberProgression);
}

const instructionMessage = 'What number is missing in the progression?';
runGame(progressionGame, instructionMessage);
