// Array Utility Functions

/**
 * Removes duplicate values from an array
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * Chunks an array into smaller arrays of given size
 * e.g. chunk([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]
 */
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Flattens a nested array one level deep
 */
function flattenOne(arr) {
  return [].concat(...arr);
}

/**
 * Returns a random element from an array
 */
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = { unique, chunk, flattenOne, randomPick };
