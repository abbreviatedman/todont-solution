const App = require("./dataStructures/App");

const app = new App();
const dummyApp = new App();
dummyApp.addList("Personal");
dummyApp.addList("Work");
dummyApp.lists[0].addTodo("Walk the dog");
dummyApp.lists[0].addTodo("Wash the dishes");
dummyApp.lists[0].todos[0].markComplete();
dummyApp.lists[1].addTodo("Make a todo app");
dummyApp.lists[1].addTodo("Prep for today's meeting");
dummyApp.lists[1].todos[1].markComplete();

// module.exports = app;
// If you want fake todos, comment out the above module.exports line and comment in the next one.
// If we're in production and want the user to start fresh, comment out the below one and comment back in the previous module.exports line.
module.exports = dummyApp;
