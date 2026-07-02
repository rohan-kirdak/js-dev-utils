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

/**
 * Removes special characters from string
 */
function stripSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

/**
 * Checks if a string is a valid email
 */
function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

/**
 * Checks if string contains only digits
 */
function isNumeric(str) {
  return /^\d+$/.test(str);
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Reverses a string
 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

/**
 * Converts camelCase to snake_case
 */
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());
}

/**
 * Removes special characters from string
 */
function stripSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

/**
 * Reverses a string
 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}

/**
 * Converts camelCase to snake_case
 */
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());
}

/**
 * Converts camelCase to snake_case
 */
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());
}

/**
 * Converts camelCase to snake_case
 */
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());
}

/**
 * Removes special characters from string
 */
function stripSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Reverses a string
 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}

/**
 * Removes special characters from string
 */
function stripSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

/**
 * Checks if a string is a valid email
 */
function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

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

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

/**
 * Converts camelCase to snake_case
 */
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Checks if a string is a valid email
 */
function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Reverses a string
 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

/**
 * Counts words in a string
 */
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/**
 * Converts camelCase to snake_case
 */
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());
}

/**
 * Reverses a string
 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}

/**
 * Pads a number with leading zeros
 */
function zeroPad(num, size = 2) {
  return String(num).padStart(size, '0');
}

/**
 * Checks if string contains only digits
 */
function isNumeric(str) {
  return /^\d+$/.test(str);
}
