import { BinaryTree, BinarySearchTree, TreeTraversal } from "../src/index.js";

console.log("=== Binary Tree & BST Example ===");

// 1. Constructing a Binary Tree from a level-order array (LeetCode format)
console.log("\nBuilding Binary Tree from [1, 2, 3, null, 4, 5, 6]:");
const tree = BinaryTree.fromArray([1, 2, 3, null, 4, 5, 6]);

console.log("Visual representation (top-down):");
tree.prettyPrint();

// 2. Getting size, height, and balanced status
console.log(`\nTree Height: ${tree.height()}`);
console.log(`Tree Size: ${tree.size()}`);
console.log(`Is Balanced: ${tree.isBalanced()}`);

// 3. Serializing and Deserializing
const serialized = tree.serialize();
console.log("Serialized to level-order array:", serialized);

// 4. Traversals
console.log("\n--- Traversals ---");
console.log("Pre-order:   ", TreeTraversal.preorder(tree.root));
console.log("In-order:    ", TreeTraversal.inorder(tree.root));
console.log("Post-order:  ", TreeTraversal.postorder(tree.root));
console.log("Level-order: ", TreeTraversal.levelOrder(tree.root));

// 5. Binary Search Tree (BST)
console.log("\n--- Binary Search Tree (BST) ---");
const bst = new BinarySearchTree();
bst.insert(50).insert(30).insert(70).insert(20).insert(40).insert(60).insert(80);

console.log("BST visual structure:");
bst.prettyPrint();

console.log("In-order traversal of BST (sorted elements):", TreeTraversal.inorder(bst.root));

console.log("\nRemoving node 30 (has two children, successor is 40):");
bst.remove(30);
bst.prettyPrint();
console.log("In-order traversal after removal:", TreeTraversal.inorder(bst.root));
