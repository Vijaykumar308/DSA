import { ListNode } from "./ListNode.js";

/**
 * Singly Linked List helper class.
 */
export class LinkedList {
  /**
   * Creates an empty LinkedList.
   */
  constructor() {
    /** @type {ListNode|null} */
    this.head = null;
    /** @type {number} */
    this._size = 0;
  }

  /**
   * Appends a value to the end of the list.
   * @param {any} val - The value to append.
   * @returns {LinkedList} The list instance for chaining.
   */
  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this._size++;
    return this;
  }

  /**
   * Prepends a value to the start of the list.
   * @param {any} val - The value to prepend.
   * @returns {LinkedList} The list instance for chaining.
   */
  prepend(val) {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    this._size++;
    return this;
  }

  /**
   * Inserts a value at a specific 0-based index.
   * If index is <= 0, prepends. If index >= length, appends.
   * @param {any} val - The value to insert.
   * @param {number} index - The 0-based index.
   * @returns {LinkedList} The list instance for chaining.
   */
  insertAt(val, index) {
    if (index <= 0) {
      return this.prepend(val);
    }
    if (index >= this._size) {
      return this.append(val);
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const newNode = new ListNode(val, current.next);
    current.next = newNode;
    this._size++;
    return this;
  }

  /**
   * Deletes the first node containing the specified value.
   * @param {any} val - The value to delete.
   * @returns {boolean} True if a node was deleted, false otherwise.
   */
  delete(val) {
    if (!this.head) return false;

    if (this.head.val === val) {
      this.head = this.head.next;
      this._size--;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.val !== val) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this._size--;
      return true;
    }

    return false;
  }

  /**
   * Deletes a node at a specific 0-based index.
   * @param {number} index - The index of the node to delete.
   * @returns {any} The value of the deleted node, or null if index is out of bounds.
   */
  deleteAt(index) {
    if (index < 0 || index >= this._size || !this.head) {
      return null;
    }

    let deletedValue;
    if (index === 0) {
      deletedValue = this.head.val;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      deletedValue = current.next.val;
      current.next = current.next.next;
    }

    this._size--;
    return deletedValue;
  }

  /**
   * Searches for a node with the specified value.
   * @param {any} val - The value to search for.
   * @returns {ListNode|null} The node if found, otherwise null.
   */
  search(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Reverses the list in-place.
   * @returns {LinkedList} The list instance for chaining.
   */
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  /**
   * Returns the length of the list.
   * @returns {number} The size of the list.
   */
  length() {
    return this._size;
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} True if empty, false otherwise.
   */
  isEmpty() {
    return this._size === 0;
  }

  /**
   * Converts the list elements into a standard JavaScript array.
   * @returns {any[]} Array of list element values.
   */
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  /**
   * Static builder to construct a LinkedList from an array.
   * @param {any[]} arr - Array of values.
   * @returns {LinkedList} A new LinkedList instance.
   */
  static fromArray(arr) {
    const list = new LinkedList();
    if (!Array.isArray(arr)) return list;
    for (const val of arr) {
      list.append(val);
    }
    return list;
  }

  /**
   * Prints the linked list elements in a visual representation.
   * Format: 1 -> 2 -> 3 -> null
   * @returns {string} The string representation.
   */
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    const result = arr.length > 0 ? arr.join(" -> ") + " -> null" : "null";
    console.log(result);
    return result;
  }
}
