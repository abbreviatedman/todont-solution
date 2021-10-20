const Todo = require("./Todo");

class List {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo(text) {
    const todo = new Todo(text);
    this.todos.push(todo);
  }

  removeTodo(todo) {
    this.todos.forEach((candidate, i) => {
      if (candidate.text === todo.text) {
        // Remove the todo at that i from the list.
        this.todos.splice(i, 1);
      }
    });
  }

  changeTitle(text) {
    this.title = text;
  }
}

// The factory function version, just returning an object.
// (With cool methods.)
// const List = (title) => {
//   return {
//     title: title,
//     todos: [],

//     addTodo: function (text) {
//       const todo = new Todo(text);
//       this.todos.push(todo);
//     },

//     removeTodo: function (todo) {
//       this.todos.forEach((candidate, i) => {
//         if (candidate.text === todo.text) {
//           // Remove the todo at that i from the list.
//           this.todos.splice(i, 1);
//         }
//       });
//     },

//     changeTitle: function (text) {
//       this.title = text;
//     },
//   };
// };

module.exports = List;
