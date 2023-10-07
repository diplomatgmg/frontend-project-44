#!/usr/bin/env node

import readlineSync from "readline-sync";
import getName from "../src/cli.js";
import printWelcome from "./brain-games.js";

function evenOrOddGame() {
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.floor(Math.random() * 100);

        console.log(`Question ${randomNumber}`);

        const userAnswer = readlineSync.question("Your answer: ");
        const isEven = randomNumber % 2 === 0;
        const isCorrect = (userAnswer === "yes" && isEven) || (userAnswer === "no" && !isEven);

        if (isCorrect) {
            console.log("Correct!");
        } else {
            const correctAnswer = userAnswer === "yes" ? "no" : "yes";
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            return false;
        }
    }
    return true;
}

const name = getName();
printWelcome(name);

const winGame = evenOrOddGame();

if (winGame) {
    console.log(`Congratulations, ${name}!`);
} else {
    console.log(`Try one more time, ${name} <3`);
}
