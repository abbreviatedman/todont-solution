const Todo = require("./makeTodo");

const makeList = (title) => {
  return {
    title: title,
    todos: [],

    addTodo: function(text) {
      const todo = new Todo(text);
      this.todos.push(todo)
    },

    removeTodo: function(todo) {

    },

    changeTitle: function(text) {
      this.title = text;
    }
  }
}

module.exports = makeList;

const list = makeList('Personal');
const list2 = makeList('Work');
const userInput = 'walk the dog'
list.addTodo(userInput)

list.addTodo('make dinner')
list2.addTodo('sign Cindy\'s Get Well card')