/**
 * Represents a node in a Binary Tree.
 */
export class TreeNode {
  /**
   * Creates a new TreeNode.
   * @param {any} [val=0] - The value of the node.
   * @param {TreeNode|null} [left=null] - The left child node.
   * @param {TreeNode|null} [right=null] - The right child node.
   */
  constructor(val = 0, left = null, right = null) {
    /** @type {any} */
    this.val = val;
    /** @type {TreeNode|null} */
    this.left = left;
    /** @type {TreeNode|null} */
    this.right = right;
  }
}
