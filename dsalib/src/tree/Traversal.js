/**
 * Traversal utilities for Binary Trees.
 * Supports preorder, inorder, postorder, and levelorder traversals.
 */
export class Traversal {
  /**
   * Pre-order traversal (Root -> Left -> Right).
   * @param {TreeNode|null} root - The starting node.
   * @param {function} [callback] - Optional callback function(val, node).
   * @returns {any[]} Array of node values visited if no callback is provided.
   */
  static preorder(root, callback) {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      if (callback) {
        callback(node.val, node);
      } else {
        result.push(node.val);
      }
      traverse(node.left);
      traverse(node.right);
    };
    traverse(root);
    return callback ? [] : result;
  }

  /**
   * In-order traversal (Left -> Root -> Right).
   * Visiting BST in-order returns elements in sorted order.
   * @param {TreeNode|null} root - The starting node.
   * @param {function} [callback] - Optional callback function(val, node).
   * @returns {any[]} Array of node values visited if no callback is provided.
   */
  static inorder(root, callback) {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      if (callback) {
        callback(node.val, node);
      } else {
        result.push(node.val);
      }
      traverse(node.right);
    };
    traverse(root);
    return callback ? [] : result;
  }

  /**
   * Post-order traversal (Left -> Right -> Root).
   * @param {TreeNode|null} root - The starting node.
   * @param {function} [callback] - Optional callback function(val, node).
   * @returns {any[]} Array of node values visited if no callback is provided.
   */
  static postorder(root, callback) {
    const result = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      if (callback) {
        callback(node.val, node);
      } else {
        result.push(node.val);
      }
    };
    traverse(root);
    return callback ? [] : result;
  }

  /**
   * Level-order traversal (BFS).
   * @param {TreeNode|null} root - The starting node.
   * @param {function} [callback] - Optional callback function(val, node).
   * @returns {any[]} Array of node values visited if no callback is provided.
   */
  static levelOrder(root, callback) {
    const result = [];
    if (!root) return result;
    const queue = [root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (callback) {
        callback(current.val, current);
      } else {
        result.push(current.val);
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return callback ? [] : result;
  }
}
