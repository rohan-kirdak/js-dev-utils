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

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Sums all numbers in an array
 */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/**
 * Groups array items by a key
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

/**
 * Groups array items by a key
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

/**
 * Sums all numbers in an array
 */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Sums all numbers in an array
 */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Groups array items by a key
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Checks if array is empty
 */
function isEmpty(arr) {
  return !arr || arr.length === 0;
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Checks if array is empty
 */
function isEmpty(arr) {
  return !arr || arr.length === 0;
}

/**
 * Checks if array is empty
 */
function isEmpty(arr) {
  return !arr || arr.length === 0;
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Checks if array is empty
 */
function isEmpty(arr) {
  return !arr || arr.length === 0;
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Groups array items by a key
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

/**
 * Groups array items by a key
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Groups array items by a key
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Checks if array is empty
 */
function isEmpty(arr) {
  return !arr || arr.length === 0;
}

/**
 * Groups array items by a key
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Sums all numbers in an array
 */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/**
 * Checks if array is empty
 */
function isEmpty(arr) {
  return !arr || arr.length === 0;
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles an array in place
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns the max value in an array
 */
function maxVal(arr) {
  return Math.max(...arr);
}

/**
 * Returns min value in an array
 */
function minVal(arr) {
  return Math.min(...arr);
}
