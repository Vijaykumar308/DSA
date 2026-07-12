console.log("=========================================");
console.log("RUNNING ALL LIBRARY EXAMPLE TESTS");
console.log("=========================================\n");

console.log("1. Running Array Utils Example...");
await import("./arrayUtils.js");
console.log("\n-----------------------------------------\n");

console.log("2. Running Linked List Example...");
await import("./linkedList.js");
console.log("\n-----------------------------------------\n");

console.log("3. Running Stack Example...");
await import("./stack.js");
console.log("\n-----------------------------------------\n");

console.log("4. Running Queue & Deque Example...");
await import("./queue.js");
console.log("\n-----------------------------------------\n");

console.log("5. Running Tree Example...");
await import("./tree.js");
console.log("\n-----------------------------------------\n");

console.log("6. Running Graph Example...");
await import("./graph.js");

console.log("\n=========================================");
console.log("ALL TESTS COMPLETED SUCCESSFULLY!");
console.log("=========================================");
