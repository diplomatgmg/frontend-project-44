import readlineSync from "readline-sync";

function printName() {
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
}

export {printName};