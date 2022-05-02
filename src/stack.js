const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.elements = [];
  }
  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return Math.max(...this.elements)
  }
}

// const s = new Stack;
// s.push(2)
// s.push(5)
// s.push(45)
// s.push(451)
// s.push(42)
// s.pop()

// console.log(s.pop());

module.exports = {
  Stack
};
