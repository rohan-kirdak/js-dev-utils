// Date Utility Functions

/**
 * Formats a date to DD-MM-YYYY
 */
function formatDate(date = new Date()) {
  const d = new Date(date);
  const day   = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year  = d.getFullYear();
  return `${day}-${month}-${year}`;
}

/**
 * Returns how many days ago a date was
 */
function daysAgo(date) {
  const now  = new Date();
  const past = new Date(date);
  const diff = Math.floor((now - past) / (1000 * 60 * 60 * 24));
  return diff;
}

/**
 * Checks if a date is today
 */
function isToday(date) {
  const d   = new Date(date);
  const now = new Date();
  return d.toDateString() === now.toDateString();
}

module.exports = { formatDate, daysAgo, isToday };

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns the current timestamp as a readable string
 */
function nowReadable() {
  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Returns current IST timestamp as readable string
 */
function nowIST() {
  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Returns current IST timestamp as readable string
 */
function nowIST() {
  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns current IST timestamp as readable string
 */
function nowIST() {
  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Returns current IST timestamp as readable string
 */
function nowIST() {
  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

/**
 * Adds N days to a date
 */
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Returns the day name (Monday, Tuesday...)
 */
function getDayName(date = new Date()) {
  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Checks if a date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}
