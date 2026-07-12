/**
 * Queue implementation using an array with a head-index pointer
 * to achieve O(1) amortized dequeue operations.
 */
export class Queue {
  /**
   * Creates an empty Queue.
   */
  constructor() {
    /** @type {any[]} */
    this.items = [];
    /** @type {number} */
    this.head = 0;
  }

  /**
   * Adds an element to the end of the queue.
   * @param {any} val - The element to add.
   * @returns {Queue} The queue instance for chaining.
   */
  enqueue(val) {
    this.items.push(val);
    return this;
  }

  /**
   * Removes and returns the element at the front of the queue.
   * @returns {any|undefined} The front element, or undefined if queue is empty.
   */
  dequeue() {
    if (this.isEmpty()) return undefined;

    const val = this.items[this.head];
    this.head++;

    // Periodic cleanup of unused space to avoid memory accumulation.
    if (this.head > 1000 && this.head > this.items.length >> 1) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }

    return val;
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns {any|undefined} The front element, or undefined if empty.
   */
  front() {
    if (this.isEmpty()) return undefined;
    return this.items[this.head];
  }

  /**
   * Returns the element at the rear of the queue without removing it.
   * @returns {any|undefined} The rear element, or undefined if empty.
   */
  rear() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  /**
   * Returns the number of elements in the queue.
   * @returns {number} The size of the queue.
   */
  size() {
    return this.items.length - this.head;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if empty, false otherwise.
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Removes all elements from the queue.
   */
  clear() {
    this.items = [];
    this.head = 0;
  }

  /**
   * Prints the queue elements in visual format.
   * Front to rear representation.
   * @returns {string} The string representation.
   */
  print() {
    const elements = this.items.slice(this.head);
    const representation = `Front -> [ ${elements.join(", ")} ] <- Rear`;
    console.log(representation);
    return representation;
  }
}
