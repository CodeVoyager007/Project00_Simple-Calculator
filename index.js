#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("=================================================="));
console.log(chalk.bold.yellow("                   CALCULATOR                     "));
console.log(chalk.bold.yellow("=================================================="));
async function calculator() {
    const answer = await inquirer.prompt([
        { message: "Enter your first number", type: "number", name: "firstNumber" },
        { message: "Enter your second number", type: "number", name: "secondNumber" },
        {
            message: "Select one of the operator to perform action",
            type: "list",
            name: "operator",
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Remainder",
                "Exponent",
            ],
        },
    ]);
    let result;
    switch (answer.operator) {
        case "Addition":
            result = answer.firstNumber + answer.secondNumber;
            break;
        case "Subtraction":
            result = answer.firstNumber - answer.secondNumber;
            break;
        case "Multiplication":
            result = answer.firstNumber * answer.secondNumber;
            break;
        case "Division":
            result = answer.firstNumber / answer.secondNumber;
            break;
        case "Remainder":
            result = answer.firstNumber % answer.secondNumber;
            break;
        case "Exponent":
            result = answer.firstNumber ** answer.secondNumber;
            break;
        default:
            console.log("Please select a valid operator");
            return;
    }
    console.log(chalk.green("Result: " + result));
    const { continueCalculation } = await inquirer.prompt([
        {
            message: "Do you want to continue the calculation?",
            type: "confirm",
            name: "continueCalculation",
        },
    ]);
    if (continueCalculation) {
        calculator();
    }
    else {
        console.log(chalk.bold.yellow("=================================================="));
        console.log(chalk.bold.yellow("                      THE END                     "));
        console.log(chalk.bold.yellow("=================================================="));
    }
}
calculator();
// #!/usr/bin/env node
// console.log(chalk.bold.yellow(".................................................."));
// console.log(chalk.bold.yellow("................. CALCULATOR APP .................."));
// console.log(chalk.bold.yellow(".................................................."));
// import inquirer from "inquirer";
// import chalk from "chalk";
// const answer = await inquirer.prompt([
//   { message: "Enter your first number", type: "number", name: "firstNumber" },
//   { message: "Enter your second number", type: "number", name: "secondNumber" },
//   {
//     message: "Select one of the operator to perform action",
//     type: "list",
//     name: "operator",
//     choices: [
//       "Addition",
//       "Subtraction",
//       "Multiplication",
//       "Division",
//       "Remainder",
//       "Exponent",
//     ],
//   },
// ]);
// if (answer.operator === "Addition") {
//   console.log(answer.firstNumber + answer.secondNumber);
// } else if (answer.operator === "Subtraction") {
//   console.log(answer.firstNumber - answer.secondNumber);
// } else if (answer.operator === "Multiplication") {
//   console.log(answer.firstNumber * answer.secondNumber);
// } else if (answer.operator === "Division") {
//   console.log(answer.firstNumber / answer.secondNumber);
// } else if (answer.operator === "Remainder") {
//   console.log(answer.firstNumber % answer.secondNumber);
// } else if (answer.operator === "Exponent") {
//   console.log(answer.firstNumber ** answer.secondNumber);
// } else {
//   console.log("Please select a valid operator");
// }
// console.log("THE END");
