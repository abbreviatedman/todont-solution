const readlineSync = require("readline-sync");

const editTodo = (todo, list) => {
  console.clear();
  const editMenu = `How would you like to edit the following todo?

${todo.isComplete ? "☑️" : "🆇"} ${todo.text}

(x) Mark it unfinished.
(v) Mark it done.
(e) Edit the text of the todo.
(d) Delete the todo.
(b) Go back without changing anything.

`;

  // Ask them what they want to do.
  const response = readlineSync.question(editMenu).toLowerCase();
  if (response === "x") {
    todo.markIncomplete();
  } else if (response === "v") {
    todo.markComplete();
  } else if (response === "e") {
    //Ask them what to change the todo's text to.
    console.clear();
    const text = readlineSync.question(
      "What should we change the text to?\n\n"
    );

    todo.changeText(text);
  } else if (response === "d") {
    list.removeTodo(todo);
  }

  console.clear();
};

module.exports = editTodo;
