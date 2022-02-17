import chalk from "chalk";

const log = console.log;

export const successMessage = (message) => {
  log(chalk.blue.bgGreen(message));
};

export const errorMessage = (message) => {
  log(chalk.bgRed(message));
};

export const listItem = (title) => {
  log("title: " + chalk.bgBlueBright.bold(title));
};

export const readItem = (title, body) => {
  log(chalk.bgBlueBright.bold(title) + "\n" + chalk.bold.blueBright(body));
};
