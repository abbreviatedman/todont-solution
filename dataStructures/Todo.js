// The class version.
// Note that the `constructor` method is the function where the arguments go when you say:
// const todo = new Todo('Walk the dog!');
class Todo {
  constructor(text) {
    this.text = text;
    this.isComplete = false;
  }

  markComplete() {
    this.isComplete = true;
  }

  markIncomplete() {
    this.isComplete = false;
  }

  changeText(newText) {
    this.text = newText;
  }
}

module.exports = Todo;

// The factory function version, just returning an object.
// (With cool methods.)
// const makeTodo = (text) => {
//   return {
//     text: text,
//     isComplete: false,

//     markComplete: function () {
//       this.isComplete = true;
//     },

//     markIncomplete: function () {
//       this.isComplete = false;
//     },

//     changeText: function (newText) {
//       this.text = newText;
//     },
//   };
// };
