const makeList = require("./makeList");

const list1 = makeList('Personal');
list1.addTodo('Walk the dog')
list1.addTodo('Wash the dishes')
const list2 = makeList('Work');
list2.addTodo('Make a todo app')
list2.addTodo('Prep for today\'s meeting')

const lists = [
  list1,
  list2
];

module.exports = lists;
