import {BinaryTree, TreeTraversal} from "../dsalib/src/index.js";

// const node = BinaryTree.fromArray([1,2,2,3,4,4,3]);
const node = BinaryTree.fromArray([1,2,2,3]);
node.prettyPrint();

function isSame(r1, r2) {
    if(r1 === null && r2 === null) return true;
    if(r1 === null || r2 === null) return false;

    // if(r1.val !== r2.val) return false;

    let v1 = isSame(r1.left, r2.left);
    let v2 = isSame(r1.right, r2.right);

    if(v1 === true && v2 === true) return true;

    return false;
}

console.log(isSame(node.root.left, node.root.right));

/*
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

*/