#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will generate a random number    done
// 2) User input for guessing number            done
// 3) Compare user input with computer generated number and show result   done


const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:"
},
]);

if (answers.userGuessedNumber === randomNumber) {
console.log("Congratulations! You have guessed a right number");

} else {
  console.log("You Guessed a Wrong Number");

}