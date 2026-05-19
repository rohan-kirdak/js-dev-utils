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
