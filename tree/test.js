// import { BinaryTree, TreeTraversal } from "./src/index.js";

import { BinaryTree, TreeTraversal } from "../dsalib/src/index.js";


const tree = BinaryTree.fromArray([1, 2, 3, null, 4, 5]);
console.log(tree.height());
console.log(tree.size());
console.log(tree.isBalanced());
console.log(tree.serialize());
console.log(TreeTraversal.preorder(tree.root));
console.log(TreeTraversal.levelOrder(tree.root));
tree.prettyPrint();