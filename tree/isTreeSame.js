import {BinaryTree, TreeTraversal} from "../dsalib/src/index.js";

const tree1 = BinaryTree.fromArray([1,2,3,12,5]);
const tree2 = BinaryTree.fromArray([1,2,3,12,5]);


function isTreeSame(node1, node2) {
   if(node1 === null && node2 === null) return true;
   if(node1 === null || node2 === null) return false;

   if(node1.val !== node2.val) return false;

   let r1 = isTreeSame(node1.left, node2.left);
   let r2 = isTreeSame(node1.right, node2.right);

   if(r1 === true && r2 === true) return true;

   return false;
}

const v = isTreeSame(tree1.root, tree2.root);
console.log(v);