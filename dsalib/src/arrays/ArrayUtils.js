/**
 * Helper utilities for array operations commonly used in DSA problems.
 */
export class ArrayUtils {
  /**
   * Swaps two elements in an array in-place.
   * @param {any[]} arr - The target array.
   * @param {number} i - The first index.
   * @param {number} j - The second index.
   * @throws {RangeError} If indices are out of bounds.
   */
  static swap(arr, i, j) {
    if (i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
      throw new RangeError("Array index out of bounds");
    }
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  /**
   * Reverses a subarray in-place.
   * @param {any[]} arr - The target array.
   * @param {number} [start=0] - The starting index (inclusive).
   * @param {number} [end=arr.length-1] - The ending index (inclusive).
   */
  static reverse(arr, start = 0, end = arr.length - 1) {
    let l = Math.max(0, start);
    let r = Math.min(arr.length - 1, end);
    while (l < r) {
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }

  /**
   * Rotates an array in-place by k steps.
   * A positive k rotates right. A negative k rotates left.
   * Time Complexity: O(N), Space Complexity: O(1).
   * @param {any[]} arr - The target array.
   * @param {number} k - The number of positions to rotate.
   */
  static rotate(arr, k) {
    const n = arr.length;
    if (n <= 1) return;
    
    // Normalize k
    let steps = k % n;
    if (steps < 0) {
      steps += n;
    }
    if (steps === 0) return;

    // Rotate right by steps:
    // 1. Reverse entire array
    // 2. Reverse first steps elements
    // 3. Reverse remaining n - steps elements
    this.reverse(arr, 0, n - 1);
    this.reverse(arr, 0, steps - 1);
    this.reverse(arr, steps, n - 1);
  }

  /**
   * Computes the 1-based prefix sum array.
   * prefix[0] = 0, and prefix[i] = sum of arr[0...i-1].
   * Useful for range sum queries: sum(L...R) = prefix[R+1] - prefix[L].
   * @param {number[]} arr - The input array of numbers.
   * @returns {number[]} The prefix sum array of size N + 1.
   */
  static prefixSum(arr) {
    const n = arr.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + arr[i];
    }
    return prefix;
  }

  /**
   * Creates a frequency map (Map of element to count).
   * @param {any[]} arr - The input array.
   * @returns {Map<any, number>} A Map representing elements and their frequencies.
   */
  static frequencyMap(arr) {
    const map = new Map();
    for (const val of arr) {
      map.set(val, (map.get(val) || 0) + 1);
    }
    return map;
  }

  /**
   * Performs binary search on a sorted array.
   * @param {any[]} arr - The sorted array.
   * @param {any} target - The element to search for.
   * @param {function} [compareFn] - Custom comparator (defaults to numeric/string sorting).
   * @returns {number} The index of the element if found, otherwise -1.
   */
  static binarySearch(arr, target, compareFn = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = (low + high) >> 1;
      const cmp = compareFn(arr[mid], target);
      if (cmp === 0) {
        return mid;
      } else if (cmp < 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }

  /**
   * Finds the lower bound index of target in a sorted array.
   * The first index where element >= target.
   * @param {any[]} arr - The sorted array.
   * @param {any} target - The target element.
   * @param {function} [compareFn] - Custom comparator.
   * @returns {number} The first index where element >= target. Returns arr.length if no such element.
   */
  static lowerBound(arr, target, compareFn = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
      const mid = (low + high) >> 1;
      const cmp = compareFn(arr[mid], target);
      if (cmp >= 0) {
        high = mid; // Try finding a smaller index on the left
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  /**
   * Finds the upper bound index of target in a sorted array.
   * The first index where element > target.
   * @param {any[]} arr - The sorted array.
   * @param {any} target - The target element.
   * @param {function} [compareFn] - Custom comparator.
   * @returns {number} The first index where element > target. Returns arr.length if no such element.
   */
  static upperBound(arr, target, compareFn = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
      const mid = (low + high) >> 1;
      const cmp = compareFn(arr[mid], target);
      if (cmp > 0) {
        high = mid; // Try finding a smaller index on the left
      } else {
        low = mid + 1;
      }
    }
    return low;
  }
}
