#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Computer will generate a random number
// 2. User input the guessing Number
// 3. Compare the user input with computer generated number and show results..
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-10",
    }]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! Your Guessed Number is Correct");
}
else {
    console.log("You Guessed the Wrong Number");
}
;
