/**
 * Stack implementation using a dynamic array.
 * Offers standard LIFO (Last In First Out) operations.
 */
export class Stack {
  /**
   * Creates an empty Stack.
   */
  constructor() {
    /** @type {any[]} */
    this.items = [];
  }

  /**
   * Adds an element to the top of the stack.
   * @param {any} val - The element to add.
   * @returns {Stack} The stack instance for chaining.
   */
  push(val) {
    this.items.push(val);
    return this;
  }

  /**
   * Removes and returns the element at the top of the stack.
   * @returns {any|undefined} The top element, or undefined if stack is empty.
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @returns {any|undefined} The top element, or undefined if stack is empty.
   */
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} The size of the stack.
   */
  size() {
    return this.items.length;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if empty, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Removes all elements from the stack.
   */
  clear() {
    this.items = [];
  }

  /**
   * Prints the stack elements in visual format.
   * Bottom to top representation.
   * @returns {string} The string representation.
   */
  print() {
    const representation = `Bottom -> [ ${this.items.join(", ")} ] <- Top`;
    console.log(representation);
    return representation;
  }
}
