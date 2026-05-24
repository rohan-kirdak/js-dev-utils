// String Utility Functions

/**
 * Capitalizes the first letter of a string
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a given length and adds ellipsis
 */
function truncate(str, maxLength = 50) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Converts a string to slug format
 * e.g. "Hello World" => "hello-world"
 */
function toSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '');
}

/**
 * Removes extra whitespace from a string
 */
function cleanWhitespace(str) {
  return str.replace(/\s+/g, ' ').trim();
}

module.exports = { capitalize, truncate, toSlug, cleanWhitespace };

/**
 * Removes special characters from string
 */
function stripSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

/**
 * Reverses a string
 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}
