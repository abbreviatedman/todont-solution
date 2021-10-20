const readlineSync = require("readline-sync");
const chalk = require("chalk");
const getTodosMenu = require("./getTodosMenu");
const editTodo = require("./editTodo");
const app = require("./app");

// They want to view a particular list.
const viewList = (list) => {
  // Ask them what todo they want (or what they want to do with the list)
  console.clear();
  let response = readlineSync.question(getTodosMenu(list)).toLowerCase();
  // Loop until they go back to the lists view.
  while (response !== "b") {
    if (isNaN(response) === false) {
      // If they entered a number, they want to edit that todo.
      const todo = list.todos[response - 1];
      editTodo(todo, list);
    } else if (response === "n") {
      // If they want a new todo.
      // Ask them what the todo should be.
      console.clear();
      const text = readlineSync.question("What task do you want to add?\n\n");
      // Add the todo.
      list.addTodo(text);
      console.clear();
    } else if (response === "r") {
      // They want to rename the list.
      console.clear();
      const title = readlineSync.question("What should the new title be?\n\n");
      list.changeTitle(title);
      console.clear();
    } else if (response === "d") {
      // They want to delete the list.
      console.clear();
      app.removeList(list);
      console.clear();
      // Quit out of this loop and go back. List OUT.
      break;
    } else {
      // They entered an unknown command.
      console.clear();
      console.log(chalk.red.bold(`${response} is not a valid input.`));
    }

    // Refresh the menu and wait for a new response.
    response = readlineSync.question(getTodosMenu(list)).toLowerCase();
  }

  console.clear();
};

module.exports = viewList;
