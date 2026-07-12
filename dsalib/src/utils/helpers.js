/**
 * Default comparator function.
 * @param {any} a - First element.
 * @param {any} b - Second element.
 * @returns {number} -1 if a < b, 1 if a > b, 0 if equal.
 */
export function defaultCompare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/**
 * Checks if two values are equal.
 * @param {any} a
 * @param {any} b
 * @returns {boolean} True if equal, false otherwise.
 */
export function defaultEquals(a, b) {
  return a === b;
}
