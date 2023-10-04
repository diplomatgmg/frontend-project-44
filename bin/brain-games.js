#!/usr/bin/env node
import getName from "../src/cli.js";
import EvenOrOddGame from "./brain-even.js";

console.log("Welcome to the Brain Games!");

const name = getName();
EvenOrOddGame();
console.log(`Congratulations, ${name}!`);
