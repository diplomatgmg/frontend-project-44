import getName from './cli.js';

export default function runGame(gameFunction, gameInstructionMessage) {
  console.log('Welcome to the Brain Games!');

  const name = getName();
  console.log(`Hello, ${name}!`);

  console.log(gameInstructionMessage);

  for (let i = 0; i < 3; i += 1) {
    const { winGame, userAnswer = null, correctAnswer = null } = gameFunction();

    if (winGame) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
}
