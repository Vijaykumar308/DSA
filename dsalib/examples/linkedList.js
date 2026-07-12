import { LinkedList } from "../src/index.js";

console.log("=== Linked List Example ===");

// 1. Constructing a linked list from an array
const list = LinkedList.fromArray([1, 2, 3, 4, 5]);
console.log("Initial List:");
list.print();

// 2. Apending and prepending
list.append(6);
list.prepend(0);
console.log("After prepending 0 and appending 6:");
list.print();

// 3. Inserting at an index
list.insertAt(99, 3);
console.log("After inserting 99 at index 3:");
list.print();

// 4. Searching for a node
const searchedNode = list.search(99);
console.log(`Searching for 99: Found node with value ${searchedNode ? searchedNode.val : "null"}`);

// 5. Deleting by value
list.delete(99);
console.log("After deleting node with value 99:");
list.print();

// 6. Deleting at index
const deletedVal = list.deleteAt(1);
console.log(`After deleting at index 1 (deleted value: ${deletedVal}):`);
list.print();

// 7. Reversing the list in-place
list.reverse();
console.log("After reversing the list:");
list.print();

// 8. Serializing to array
console.log("Serialized to JS Array:", list.toArray());
console.log(`Length: ${list.length()}, Is Empty: ${list.isEmpty()}`);
