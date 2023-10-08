import readlineSync from 'readline-sync';
import printWelcome from '../bin/brain-games.js';

export default function runGame(gameFunction, gameInstructionMessage) {
  printWelcome();

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameInstructionMessage);

  for (let i = 0; i < 3; i += 1) {
    const { winGame, userAnswer = null, correctAnswer = null } = gameFunction();

    if (winGame) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return console.log(`Try one more time, ${name} <3`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
}
