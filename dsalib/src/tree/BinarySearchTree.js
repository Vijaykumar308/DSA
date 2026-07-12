import { BinaryTree } from "./BinaryTree.js";
import { TreeNode } from "./TreeNode.js";

/**
 * Binary Search Tree (BST) implementation.
 * Extends BinaryTree to override traversal-insert and search methods with BST properties.
 */
export class BinarySearchTree extends BinaryTree {
  /**
   * Inserts a value into the BST maintaining the BST property.
   * @param {any} val - The value to insert.
   * @returns {BinarySearchTree} The BST instance for chaining.
   */
  insert(val) {
    this.root = this._insertNode(this.root, val);
    return this;
  }

  /**
   * @private
   * Recursive insert helper.
   * @param {TreeNode|null} node
   * @param {any} val
   * @returns {TreeNode}
   */
  _insertNode(node, val) {
    if (!node) {
      return new TreeNode(val);
    }

    if (val < node.val) {
      node.left = this._insertNode(node.left, val);
    } else {
      // In general, duplicate values are placed on the right subtree
      node.right = this._insertNode(node.right, val);
    }

    return node;
  }

  /**
   * Overrides search using the binary search tree property for O(log N) average lookup.
   * @param {any} val - The value to search.
   * @returns {TreeNode|null} The node if found, otherwise null.
   */
  search(val) {
    return this._searchNode(this.root, val);
  }

  /**
   * @private
   * Recursive search helper.
   * @param {TreeNode|null} node
   * @param {any} val
   * @returns {TreeNode|null}
   */
  _searchNode(node, val) {
    if (!node || node.val === val) {
      return node;
    }

    if (val < node.val) {
      return this._searchNode(node.left, val);
    }
    return this._searchNode(node.right, val);
  }

  /**
   * Removes a node with the specified value from the BST.
   * @param {any} val - The value to remove.
   * @returns {BinarySearchTree} The BST instance for chaining.
   */
  remove(val) {
    this.root = this._removeNode(this.root, val);
    return this;
  }

  /**
   * @private
   * Recursive remove helper.
   * @param {TreeNode|null} node
   * @param {any} val
   * @returns {TreeNode|null}
   */
  _removeNode(node, val) {
    if (!node) return null;

    if (val < node.val) {
      node.left = this._removeNode(node.left, val);
    } else if (val > node.val) {
      node.right = this._removeNode(node.right, val);
    } else {
      // Node to delete found

      // Case 1: No children (leaf node)
      if (!node.left && !node.right) {
        return null;
      }

      // Case 2: One child (only right, or only left)
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Case 3: Two children
      // Find the inorder successor (smallest node in the right subtree)
      const succ = this._findMin(node.right);
      node.val = succ.val;
      // Delete the successor
      node.right = this._removeNode(node.right, succ.val);
    }

    return node;
  }

  /**
   * @private
   * Helper to find node with minimum value.
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  _findMin(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
}
