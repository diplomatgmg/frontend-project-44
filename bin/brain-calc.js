#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';
import printWelcome from './brain-games.js';

function calcGame() {
  for (let i = 0; i < 3; i += 1) {
    const randomNumberA = Math.floor(Math.random() * 100);
    const randomNumberB = Math.floor(Math.random() * 100);

    const operators = ['+', '-', '*'];
    const operatorIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[operatorIndex];

    let expressionResult;

    switch (randomOperator) {
      case '+':
        expressionResult = randomNumberA + randomNumberB;
        break;
      case '-':
        expressionResult = randomNumberA - randomNumberB;
        break;
      case '*':
        expressionResult = randomNumberA * randomNumberB;
        break;
      case '/':
        expressionResult = randomNumberA / randomNumberB;
        break;
      default:
        break;
    }

    console.log('What is the result of the expression?');
    console.log(`Question: ${randomNumberA} ${randomOperator} ${randomNumberB}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (expressionResult === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expressionResult}".`);
      return false;
    }
  }

  return true;
}

const name = getName();
printWelcome(name);

const winGame = calcGame();

if (winGame) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Try one more time, ${name} <3`);
}
