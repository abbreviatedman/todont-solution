const List = require("./List");

class App {
  constructor() {
    this.lists = [];
  }

  addList(title) {
    const list = new List(title);
    this.lists.push(list);
  }

  removeList(list) {
    // Loop through our lists, looking for a match.
    this.lists.forEach((candidate, i) => {
      if (candidate.title === list.title) {
        // We've found the list, remove that list from the app.
        this.lists.splice(i, 1);
      }
    });
  }
}

module.exports = App;
