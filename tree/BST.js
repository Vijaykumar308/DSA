import { BinaryTree, TreeTraversal } from "../dsalib/src/index.js";

const tree = BinaryTree.fromArray([10, 5, 15, 2, 7, 12, 20]);

tree.prettyPrint();

function BST(root, k) {
    if(root === null) return null;

    if(root.val === k) return root;

    if(root.val > k) 
        return BST(root.left, k);
    else    
        return BST(root.right, k);

    return null;
}

const ans = BST(tree.root, 0);
console.log(ans);