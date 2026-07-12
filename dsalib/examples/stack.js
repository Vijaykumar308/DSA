import { Stack } from "../src/index.js";

console.log("=== Stack Example ===");

const stack = new Stack();
console.log("Is empty?", stack.isEmpty());

console.log("\nPushing 10, 20, 30 onto stack:");
stack.push(10).push(20).push(30);
stack.print();

console.log("Stack size:", stack.size());
console.log("Top element (peek):", stack.peek());

console.log("\nPopping from stack:");
console.log("Popped:", stack.pop());
stack.print();

console.log("New top element:", stack.peek());
console.log("Stack size now:", stack.size());

console.log("\nClearing stack:");
stack.clear();
console.log("Is empty after clear?", stack.isEmpty());
