import {BinaryTree, TreeTraversal} from "../dsalib/src/index.js";

const tree = BinaryTree.fromArray([1,2,3,4,5,6,7]);
console.log("Before inverted");
tree.prettyPrint();

function invertTree(node) {
    if(node === null) return node;

    [node.left, node.right] = [node.right, node.left];

    invertTree(node.left);
    invertTree(node.right);

    return node;
}

invertTree(tree.root);
console.log("\n\n After Inverted \n\n");
tree.prettyPrint();


