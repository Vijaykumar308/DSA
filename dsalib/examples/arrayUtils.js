import { ArrayUtils } from "../src/index.js";

console.log("=== Array Utils Example ===");

// 1. Swap
const arr1 = [10, 20, 30, 40];
console.log("Original array:", arr1);
ArrayUtils.swap(arr1, 1, 3);
console.log("After swapping indices 1 and 3:", arr1);

// 2. Reverse
const arr2 = [1, 2, 3, 4, 5, 6];
console.log("\nOriginal array:", arr2);
ArrayUtils.reverse(arr2, 1, 4);
console.log("After reversing indices 1 to 4:", arr2);

// 3. Rotate
const arr3 = [1, 2, 3, 4, 5];
console.log("\nOriginal array:", arr3);
ArrayUtils.rotate(arr3, 2);
console.log("After rotating right by 2 steps:", arr3);

ArrayUtils.rotate(arr3, -1);
console.log("After rotating left by 1 step:", arr3);

// 4. Prefix Sum
const arr4 = [1, 2, 3, 4];
const prefix = ArrayUtils.prefixSum(arr4);
console.log("\nOriginal array:", arr4);
console.log("1-based Prefix Sum array:", prefix);
// Sum of range indices 1 to 3: arr4[1] + arr4[2] + arr4[3] = 2 + 3 + 4 = 9
const sum_1_3 = prefix[4] - prefix[1];
console.log("Range sum query for index [1, 3]:", sum_1_3);

// 5. Frequency Map
const arr5 = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log("\nOriginal array:", arr5);
const frequencies = ArrayUtils.frequencyMap(arr5);
console.log("Frequency Map:");
for (const [key, count] of frequencies.entries()) {
  console.log(`  ${key} => ${count}`);
}

// 6. Binary Search & Bounds (array must be sorted)
const sortedArr = [10, 20, 20, 20, 30, 40, 50];
console.log("\nSorted Array:", sortedArr);

const idx = ArrayUtils.binarySearch(sortedArr, 30);
console.log("Index of 30 (binarySearch):", idx);

const lower = ArrayUtils.lowerBound(sortedArr, 20);
console.log("First index >= 20 (lowerBound):", lower); // should be 1

const upper = ArrayUtils.upperBound(sortedArr, 20);
console.log("First index > 20 (upperBound):", upper); // should be 4
