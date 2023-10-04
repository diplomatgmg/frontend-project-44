import readlineSync from "readline-sync";

export default () => {
    console.log("\nAnswer \"yes\" if the number is even, otherwise answer \"no\".");

    let countCorrectAnswers = 0;

    while (countCorrectAnswers !== 3) {
        const randomNumber = Math.floor(Math.random() * 100);

        console.log(`\nQuestion ${randomNumber}`);

        const userAnswer = readlineSync.question("Your answer: ");
        const isEven = randomNumber % 2 === 0;
        const isCorrect = (userAnswer === "yes" && isEven) || (userAnswer === "no" && !isEven);

        if (isCorrect) {
            console.log("Correct!");
            countCorrectAnswers += 1;
        } else {
            countCorrectAnswers = 0;
        }
    }
};
