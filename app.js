const chalk = require("chalk");
const { celsiusToF, fToCelsius } = require("./converter");

const example1 = celsiusToF(25);
console.log(chalk.red(`25°C = ${example1}°F`));

const example2 = celsiusToF(100);
console.log(chalk.yellow(`100°C = ${example2}°F`));

const example3 = fToCelsius(98.6);
console.log(chalk.green(`98.6°F = ${example3}°C`));