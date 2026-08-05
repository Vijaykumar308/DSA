# dsalib

A small JavaScript Data Structures and Algorithms library for practice and learning.

## Overview

This library provides reusable implementations for common DSA data structures and helper utilities:

- `ArrayUtils` — array helpers like swapping, reversing, rotating, prefix sums, frequency maps, binary search, lower bound, upper bound.
- `LinkedList` — singly linked list with append, prepend, insert, delete, search, reverse, and conversion helpers.
- `Stack` — stack with push, pop, peek, size, clear, print.
- `Queue` — queue with enqueue, dequeue, front, rear, size, clear.
- `Deque` — double-ended queue with add/remove at both ends.
- `BinaryTree` — generic binary tree with BFS insertion, height, size, balance check, serialization, deserialization, pretty print.
- `BinarySearchTree` — binary search tree with insert, remove, traversal and visualization.
- `TreeTraversal` — tree traversals: preorder, inorder, postorder, level order.
- `Graph` — adjacency-list graph with support for directed/undirected and weighted/unweighted graphs.
- `GraphTraversal` — graph traversal helpers: BFS and DFS.
- `defaultCompare` / `defaultEquals` — utility functions available from `utils`.

## Requirements

- Node.js 18+ (ES modules are enabled by default)

## Install / Run

No external dependencies are required.

From the `dsalib` directory:

```bash
npm install
npm test
```

This runs `node examples/testAll.js` and demonstrates the library usage.

## Using the library

If you want to use the library directly from the `dsalib` folder, import from `src/index.js`:

```js
import {
  ArrayUtils,
  LinkedList,
  Stack,
  Queue,
  Deque,
  BinaryTree,
  BinarySearchTree,
  TreeTraversal,
  Graph,
  GraphTraversal,
  defaultCompare,
  defaultEquals,
} from "./src/index.js";
```

If you copy the library into another project, update the import path accordingly.

---

## Examples

### 1. Array utilities

```js
import { ArrayUtils } from "./src/index.js";

const arr = [10, 20, 30, 40];
ArrayUtils.swap(arr, 1, 3);
console.log(arr); // [10, 40, 30, 20]

const arr2 = [1, 2, 3, 4, 5];
ArrayUtils.reverse(arr2, 1, 4);
console.log(arr2); // [1, 5, 4, 3, 2]

const arr3 = [1, 2, 3, 4, 5];
ArrayUtils.rotate(arr3, 2);
console.log(arr3); // [4, 5, 1, 2, 3]

const prefix = ArrayUtils.prefixSum([1, 2, 3, 4]);
console.log(prefix); // [0, 1, 3, 6, 10]

const freq = ArrayUtils.frequencyMap(["apple", "banana", "apple"]);
console.log([...freq.entries()]);

const sorted = [10, 20, 20, 30];
console.log(ArrayUtils.binarySearch(sorted, 20));
console.log(ArrayUtils.lowerBound(sorted, 20));
console.log(ArrayUtils.upperBound(sorted, 20));
```

### 2. Stack

```js
import { Stack } from "./src/index.js";

const stack = new Stack();
stack.push(1).push(2).push(3);
console.log(stack.peek());
console.log(stack.pop());
stack.print();
```

### 3. Queue

```js
import { Queue } from "./src/index.js";

const queue = new Queue();
queue.enqueue(1).enqueue(2).enqueue(3);
console.log(queue.front());
console.log(queue.dequeue());
queue.print();
```

### 4. Deque

```js
import { Deque } from "./src/index.js";

const deque = new Deque();
deque.addFront(10).addRear(20).addFront(5);
console.log(deque.front(), deque.rear());
console.log(deque.removeFront());
console.log(deque.removeRear());
deque.print();
```

### 5. Linked List

```js
import { LinkedList } from "./src/index.js";

const list = LinkedList.fromArray([1, 2, 3]);
list.append(4).prepend(0).insertAt(99, 2);
console.log(list.toArray());
list.delete(99);
list.reverse();
list.print();
```

### 6. Binary Tree

```js
import { BinaryTree, TreeTraversal } from "./src/index.js";

const tree = BinaryTree.fromArray([1, 2, 3, null, 4, 5]);
console.log(tree.height());
console.log(tree.size());
console.log(tree.isBalanced());
console.log(tree.serialize());
console.log(TreeTraversal.preorder(tree.root));
console.log(TreeTraversal.levelOrder(tree.root));
tree.prettyPrint();
```

The `prettyPrint()` output now shows the tree in a normal top-down orientation, with the root at the top and children below it.

### 7. Binary Search Tree

```js
import { BinarySearchTree, TreeTraversal } from "./src/index.js";

const bst = new BinarySearchTree();
bst.insert(50).insert(30).insert(70).insert(40);
console.log(TreeTraversal.inorder(bst.root));
bst.remove(30);
bst.prettyPrint();
```

### 8. Graph

```js
import { Graph } from "./src/index.js";

const graph = new Graph({ directed: false, weighted: false });
graph.addEdge(1, 2).addEdge(2, 3).addEdge(3, 4);
console.log(graph.hasEdge(1, 2));
console.log(graph.neighborIds(2));

graph.bfs(1, (value) => console.log("BFS visited:", value));
```

Or build from edges:

```js
const graph2 = Graph.fromEdges([[1, 2], [2, 3], [2, 4]], { directed: false });
```

## Examples folder

The `examples/` folder contains runnable demonstration scripts for each part of the library:

- `examples/arrayUtils.js`
- `examples/linkedList.js`
- `examples/stack.js`
- `examples/queue.js`
- `examples/tree.js`
- `examples/graph.js`
- `examples/testAll.js`

Run all examples with:

```bash
npm test
```

## Practice tips

- Start by reading the example files in `examples/`.
- Modify the input arrays or graph edges to try new cases.
- Use `LinkedList.toArray()` and `BinaryTree.serialize()` to inspect structure after changes.
- Try solving DSA problems by replacing built-in arrays with these structures.

## Notes

- The library is written as an ES module, so imports use `import` statements.
- If you want to reuse the library in another project, copy the `src/` folder and import from it.
