/**
 * Represents a node in a Linked List.
 */
export class ListNode {
  /**
   * Creates a new ListNode.
   * @param {any} [val=0] - The value of the node.
   * @param {ListNode|null} [next=null] - The next node in the list.
   */
  constructor(val = 0, next = null) {
    /** @type {any} */
    this.val = val;
    /** @type {ListNode|null} */
    this.next = next;
  }
}
