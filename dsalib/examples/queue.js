import { Queue, Deque } from "../src/index.js";

console.log("=== Queue & Deque Example ===");

// 1. Standard Queue Example
console.log("\n--- 1. Queue Operations ---");
const queue = new Queue();
console.log("Is empty?", queue.isEmpty());

console.log("Enqueueing 1, 2, 3:");
queue.enqueue(1).enqueue(2).enqueue(3);
queue.print();

console.log("Queue size:", queue.size());
console.log("Front element:", queue.front());
console.log("Rear element:", queue.rear());

console.log("\nDequeueing from queue:");
console.log("Dequeued:", queue.dequeue());
queue.print();
console.log("Front element now:", queue.front());

// 2. Deque (Double-Ended Queue) Example
console.log("\n--- 2. Deque (Double-Ended Queue) Operations ---");
const deque = new Deque();
console.log("Is empty?", deque.isEmpty());

console.log("Adding elements to Deque:");
deque.addRear(20); // Deque: [20]
deque.addFront(10); // Deque: [10, 20]
deque.addRear(30); // Deque: [10, 20, 30]
deque.addFront(5); // Deque: [5, 10, 20, 30]
deque.print();

console.log("Deque size:", deque.size());
console.log("Front of Deque:", deque.front());
console.log("Rear of Deque:", deque.rear());

console.log("\nRemoving elements from Deque:");
console.log("Removed from front:", deque.removeFront());
deque.print();

console.log("Removed from rear:", deque.removeRear());
deque.print();

console.log("Final Deque front/rear:", deque.front(), "/", deque.rear());
