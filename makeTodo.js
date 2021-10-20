// (text: String) => Todo object
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

const makePerson = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,

    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

const person1 = makePerson('Colin', 'Jaffe')
const person2 = new Person('Colin', 'Jaffe', 41)
const person3 = new Person('Younes', 'Tahiri')