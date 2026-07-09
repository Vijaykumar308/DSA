class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.arr = [];
  }
  
  preorder(root) {
    if(!root) return;
    // console.log(root.data);
    this.arr.push(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }
  
  inorder(root) {
    if(root === null) return;
    this.inorder(root.left);
    // console.log(root.data);
    this.arr.push(root.data);
    this.inorder(root.right);
  }
  
  postorder(root) {
    if(root === null) return;
    this.postorder(root.left);
    this.postorder(root.right);
    this.arr.push(root.data);
    // console.log(root.data);
    
  }
}

const t = new Tree();
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);

rootNode.left.left = new Node(10);
rootNode.left.right = new Node(20);


console.log("preorder");
t.arr = [];
t.preorder(rootNode);
console.log(t.arr);

console.log("inorder");
t.arr = [];
t.inorder(rootNode);
console.log(t.arr);

console.log("postorder");
t.arr = [];
t.postorder(rootNode);
console.log(t.arr);
