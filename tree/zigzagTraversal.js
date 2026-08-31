import {BinaryTree, TreeTraversal} from "../dsalib/src/index.js";

const tree = BinaryTree.fromArray([1,2,3,4,5,6,7]);

tree.prettyPrint();

// level order traversal from right to left;
const q = [tree.root];

const res = [];
let is_left_to_right = true;

while(q.length > 0) {
    let size = q.length;
    let temp = new Array(size);

    let first = 0;
    let last = size - 1;
    
    for(let i = 0; i < size; i++) {
        let node = q.shift();

        if(is_left_to_right) {
            temp[first] = node.val;
            first++;
        }
        else{
            temp[last] = node.val;
            last--;
        }

        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
        
    }
    is_left_to_right = !is_left_to_right;
    res.push(temp);
}

console.log(res);