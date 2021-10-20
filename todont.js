const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getListsMenu = require("./getListsMenu");
const viewList = require("./viewList");
const app = require("./app");

// Ask them what list they want to check out (or make a new one).
console.clear();
let response = readlineSync.question(getListsMenu()).toLowerCase();

// Loop until they enter "q".
while (response !== "q") {
  if (isNaN(response) === false) {
    // If they entered a number, they want to view that list.
    const list = app.lists[response - 1];
    viewList(list);
  } else if (response === "n") {
    // They want to make a new list.
    console.clear();
    const title = readlineSync.question(
      "What title should this new list have?\n\n"
    );

    app.addList(title);
    console.clear();
  } else {
    // They entered something else.
    console.clear();
    console.log(chalk.red.bold(`${response} is not a valid input.`));
  }

  // Ask them what list they want to check out (or make a new one).
  response = readlineSync.question(getListsMenu()).toLowerCase();
}
