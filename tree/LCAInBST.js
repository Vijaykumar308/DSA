import { BinaryTree, TreeTraversal } from "../dsalib/src/index.js";

const tree = BinaryTree.fromArray([10, 5, 15, 2, 7, 12, 20]);

tree.prettyPrint();

function BST(root, p, q) {
    let ans = null;

    function lca(root, p, q) {
        if(root === null) return;
        
        // root is one of them; root can be a parent of itself;
        if(root.val === p || root.val === q) return root.val;
        
        // root is in bettwen; 
        if(root.val > p && (root.val < q) && ans === null) {
            ans = root.val;
            return;
        }
        
        // root is greater than both node;
        if(root.val > p && root.val > q) {
            lca(root.left, p, q);
        }

        // root is lesser than both node;
        if(root.val < p && root.val < q) {
            lca(root.right, p, q);
        }
    }

    lca(root, p, q);

    return ans;
}

const ans = BST(tree.root, 2, 12);
console.log(ans);