import { TreeNode } from "./TreeNode.js";

/**
 * Binary Tree implementation with convenience utilities for DSA practice.
 */
export class BinaryTree {
  /**
   * Creates a Binary Tree.
   * @param {TreeNode|null} [root=null] - The root node of the tree.
   */
  constructor(root = null) {
    /** @type {TreeNode|null} */
    this.root = root;
  }

  /**
   * Inserts a value in BFS level-order (completing the tree).
   * @param {any} val - The value to insert.
   * @returns {BinaryTree} The tree instance for chaining.
   */
  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        queue.push(current.right);
      }
    }
    return this;
  }

  /**
   * Performs a BFS search for a value in the tree.
   * @param {any} val - The value to search for.
   * @returns {TreeNode|null} The node if found, otherwise null.
   */
  search(val) {
    if (!this.root) return null;
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.val === val) return current;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return null;
  }

  /**
   * Calculates the height (max depth) of the tree.
   * @returns {number} The height of the tree.
   */
  height() {
    return this._getHeight(this.root);
  }

  /**
   * @private
   * Helper to get height of a node.
   * @param {TreeNode|null} node
   * @returns {number}
   */
  _getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
  }

  /**
   * Counts the total number of nodes in the tree.
   * @returns {number} The size of the tree.
   */
  size() {
    return this._getSize(this.root);
  }

  /**
   * @private
   * Helper to get size of a node.
   * @param {TreeNode|null} node
   * @returns {number}
   */
  _getSize(node) {
    if (!node) return 0;
    return 1 + this._getSize(node.left) + this._getSize(node.right);
  }

  /**
   * Checks if the binary tree is height-balanced.
   * A tree is balanced if the heights of left and right subtrees of every node differ by at most 1.
   * @returns {boolean} True if balanced, false otherwise.
   */
  isBalanced() {
    return this._checkBalanced(this.root).balanced;
  }

  /**
   * @private
   * Helper to check balance and height.
   * @param {TreeNode|null} node
   * @returns {{balanced: boolean, height: number}}
   */
  _checkBalanced(node) {
    if (!node) return { balanced: true, height: 0 };

    const left = this._checkBalanced(node.left);
    if (!left.balanced) return { balanced: false, height: 0 };

    const right = this._checkBalanced(node.right);
    if (!right.balanced) return { balanced: false, height: 0 };

    const balanced = Math.abs(left.height - right.height) <= 1;
    const height = 1 + Math.max(left.height, right.height);

    return { balanced, height };
  }

  /**
   * Serializes the binary tree into a level-order array.
   * Nulls represent missing children (like LeetCode format).
   * @returns {(any|null)[]} The level-order array.
   */
  serialize() {
    if (!this.root) return [];
    const result = [];
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current) {
        result.push(current.val);
        queue.push(current.left);
        queue.push(current.right);
      } else {
        result.push(null);
      }
    }
    // Trim trailing nulls to align with standard representation
    while (result.length > 0 && result[result.length - 1] === null) {
      result.pop();
    }
    return result;
  }

  /**
   * Deserializes the tree from a level-order array in-place.
   * @param {(any|null)[]} arr - Level-order array representation.
   * @returns {BinaryTree} The updated tree instance.
   */
  deserialize(arr) {
    const tempTree = BinaryTree.fromArray(arr);
    this.root = tempTree.root;
    return this;
  }

  /**
   * Reconstructs a Binary Tree from a level-order array (LeetCode format).
   * @param {(any|null)[]} arr - Level-order array.
   * @returns {BinaryTree} A new BinaryTree instance.
   */
  static fromArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || arr[0] === null || arr[0] === undefined) {
      return new BinaryTree(null);
    }

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
      const current = queue.shift();

      if (current) {
        // Left child
        if (i < arr.length) {
          const leftVal = arr[i++];
          if (leftVal !== null && leftVal !== undefined) {
            current.left = new TreeNode(leftVal);
            queue.push(current.left);
          }
        }
        // Right child
        if (i < arr.length) {
          const rightVal = arr[i++];
          if (rightVal !== null && rightVal !== undefined) {
            current.right = new TreeNode(rightVal);
            queue.push(current.right);
          }
        }
      }
    }

    return new BinaryTree(root);
  }

  /**
   * Prints a simple level-order list of values in the tree.
   * @returns {string} The serialized string.
   */
  print() {
    const arr = this.serialize();
    const str = `BinaryTree: [${arr.map(x => (x === null ? "null" : x)).join(", ")}]`;
    console.log(str);
    return str;
  }

  /**
   * Pretty-prints the tree to the console.
   * Outputs a 2D vertical-like tree structure rotated 90 degrees left.
   * @returns {string} The multiline string layout.
   */
  prettyPrint() {
    const lines = [];
    this._buildPrettyString(this.root, "", true, lines);
    const output = lines.join("\n");
    console.log(output || "(Empty Tree)");
    return output;
  }

  /**
   * @private
   * Builds visual lines recursively.
   */
  _buildPrettyString(node, prefix, isLeft, lines) {
    if (!node) return;
    
    if (node.right) {
      this._buildPrettyString(node.right, prefix + (isLeft ? "│   " : "    "), false, lines);
    }
    
    lines.push(prefix + (isLeft ? "└── " : "┌── ") + node.val);
    
    if (node.left) {
      this._buildPrettyString(node.left, prefix + (isLeft ? "    " : "│   "), true, lines);
    }
  }
}
