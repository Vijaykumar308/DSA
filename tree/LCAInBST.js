import { BinaryTree, TreeTraversal } from "../dsalib/src/index.js";

const tree = BinaryTree.fromArray([10, 5, 15, 2, 7, 12, 20]);

tree.prettyPrint();

function BST(root, p, q) {
    let ans = null;

    function lca(root, p, q) {
        if(root === null) return;
        
        if(root.val === p || root.val === q) return root.val;
        
        if(root.val > p && (root.val < q) && ans === null) {
            ans = root.val;
            return;
        }
        
        if(root.val > p && root.val > q) {
            lca(root.left, p, q);
        }

        if(root.val < p && root.val < q) {
            lca(root.right, p, q);
        }
    }

    lca(root, p, q);

    return ans;
}

const ans = BST(tree.root, 2, 7);
console.log(ans);