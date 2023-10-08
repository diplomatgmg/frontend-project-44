#!/usr/bin/env node

import runGame from '../src/index.js';
import getExpressionResult from './services/brain-calc-service.js';
import { getGameResult, getRandomNumber, getUserAnswer } from './services/service.js';

function calcGame() {
  const randomNumberA = getRandomNumber();
  const randomNumberB = getRandomNumber();

  const operators = ['+', '-', '*'];
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[operatorIndex];

  const expressionResult = getExpressionResult(randomNumberA, randomNumberB, randomOperator);

  console.log(`Question: ${randomNumberA} ${randomOperator} ${randomNumberB}`);

  const userAnswer = getUserAnswer(true);
  const isCorrect = expressionResult === userAnswer;

  return getGameResult(isCorrect, userAnswer, expressionResult);
}

const instructionMessage = 'What is the result of the expression?';
runGame(calcGame, instructionMessage);
