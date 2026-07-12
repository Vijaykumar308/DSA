/**
 * Internal helper representing a doubly linked list node for Deque.
 */
class DequeNode {
  /**
   * @param {any} val - Value of the node.
   */
  constructor(val) {
    this.val = val;
    /** @type {DequeNode|null} */
    this.prev = null;
    /** @type {DequeNode|null} */
    this.next = null;
  }
}

/**
 * Double-Ended Queue (Deque) implementation using a Doubly Linked List.
 * Provides O(1) insertions and deletions at both ends.
 */
export class Deque {
  /**
   * Creates an empty Deque.
   */
  constructor() {
    /** @type {DequeNode|null} */
    this.head = null;
    /** @type {DequeNode|null} */
    this.tail = null;
    /** @type {number} */
    this._size = 0;
  }

  /**
   * Adds an element to the front of the deque.
   * @param {any} val - The element to add.
   * @returns {Deque} The deque instance for chaining.
   */
  addFront(val) {
    const newNode = new DequeNode(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this._size++;
    return this;
  }

  /**
   * Adds an element to the rear of the deque.
   * @param {any} val - The element to add.
   * @returns {Deque} The deque instance for chaining.
   */
  addRear(val) {
    const newNode = new DequeNode(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
    return this;
  }

  /**
   * Removes and returns the element at the front of the deque.
   * @returns {any|undefined} The front element, or undefined if empty.
   */
  removeFront() {
    if (this.isEmpty()) return undefined;
    const removedVal = this.head.val;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this._size--;
    return removedVal;
  }

  /**
   * Removes and returns the element at the rear of the deque.
   * @returns {any|undefined} The rear element, or undefined if empty.
   */
  removeRear() {
    if (this.isEmpty()) return undefined;
    const removedVal = this.tail.val;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this._size--;
    return removedVal;
  }

  /**
   * Returns the element at the front of the deque without removing it.
   * @returns {any|undefined} The front element, or undefined if empty.
   */
  front() {
    if (this.isEmpty()) return undefined;
    return this.head.val;
  }

  /**
   * Returns the element at the rear of the deque without removing it.
   * @returns {any|undefined} The rear element, or undefined if empty.
   */
  rear() {
    if (this.isEmpty()) return undefined;
    return this.tail.val;
  }

  /**
   * Returns the number of elements in the deque.
   * @returns {number} The size of the deque.
   */
  size() {
    return this._size;
  }

  /**
   * Checks if the deque is empty.
   * @returns {boolean} True if empty, false otherwise.
   */
  isEmpty() {
    return this._size === 0;
  }

  /**
   * Removes all elements from the deque.
   */
  clear() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * Prints the deque elements in visual format.
   * Front to rear representation.
   * @returns {string} The string representation.
   */
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    const representation = `Front -> [ ${arr.join(", ")} ] <- Rear`;
    console.log(representation);
    return representation;
  }
}
