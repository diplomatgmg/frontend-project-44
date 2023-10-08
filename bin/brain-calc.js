#!/usr/bin/env node

import runGame from '../src/index.js';
import getExpressionResult from './services/brain-calc-service.js';
import { getRandomNumber, getUserAnswer } from './services/service.js';

function calcGame() {
  const randomNumberA = getRandomNumber();
  const randomNumberB = getRandomNumber();

  const operators = ['+', '-', '*'];
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[operatorIndex];

  const expressionResult = getExpressionResult(randomNumberA, randomNumberB, randomOperator);

  console.log(`Question: ${randomNumberA} ${randomOperator} ${randomNumberB}`);

  const userAnswer = getUserAnswer(true);

  if (!(expressionResult === userAnswer)) {
    return { winGame: false, userAnswer, correctAnswer: expressionResult };
  }
  return { winGame: true };
}

const instructionMessage = 'What is the result of the expression?';
runGame(calcGame, instructionMessage);
