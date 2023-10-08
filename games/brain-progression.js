#!/usr/bin/env node

import { getGameResult, getRandomNumber, getUserAnswer } from '../services/service-general.js';
import getProgressionArray from '../services/brain-progression-service.js';
import runGame from '../src/index.js';

function progressionGame() {
  const startProgression = getRandomNumber({ max: 10 });
  const stepProgression = getRandomNumber({ min: 1, max: 20 });

  const progression = getProgressionArray(startProgression, stepProgression);
  const randomIndexProgression = getRandomNumber({ max: 9 });
  const randomNumberProgression = progression[randomIndexProgression];

  progression[randomIndexProgression] = '..';

  console.log('Question:', progression.join(' '));

  const userAnswer = getUserAnswer(true);
  const isCorrect = randomNumberProgression === userAnswer;

  return getGameResult(isCorrect, userAnswer, randomNumberProgression);
}

const instructionMessage = 'What number is missing in the progression?';
runGame(progressionGame, instructionMessage);
