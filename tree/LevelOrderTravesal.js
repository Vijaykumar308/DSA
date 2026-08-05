import {BinaryTree, TreeTraversal} from "../dsalib/src/index.js";

const tree = BinaryTree.fromArray([1,2,3,4,5,6,7,8,9,10, null]);

tree.prettyPrint();

// Level Order Traversal;

const q = [tree.root];
const res = [];

while(q.length > 0) {
    let size = q.length;
    let level = [];

    for(let i = 0; i < size; i++) {
        let node = q.shift(); // remove from the queue;

        level.push(node.val);

        if(node.left !== null) {
            q.push(node.left);
        }

        if(node.right !== null) {
            q.push(node.right);
        }
    }
    res.push(level);
}

console.log(res);