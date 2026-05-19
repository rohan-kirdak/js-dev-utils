#!/usr/bin/env node
// auto-update.js — runs inside GitHub Actions to simulate real dev work

const fs   = require('fs');
const path = require('path');

// ─── Pool of realistic code snippets to inject ──────────────────────────────

const stringSnippets = [
  `\n/**\n * Checks if a string is a valid email\n */\nfunction isEmail(str) {\n  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(str);\n}\n`,
  `\n/**\n * Reverses a string\n */\nfunction reverseStr(str) {\n  return str.split('').reverse().join('');\n}\n`,
  `\n/**\n * Counts word occurrences in a string\n */\nfunction wordCount(str) {\n  return str.trim().split(/\\s+/).length;\n}\n`,
  `\n/**\n * Pads a number with leading zeros\n */\nfunction zeroPad(num, size = 2) {\n  return String(num).padStart(size, '0');\n}\n`,
  `\n/**\n * Converts camelCase to snake_case\n */\nfunction toSnakeCase(str) {\n  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());\n}\n`,
];

const arraySnippets = [
  `\n/**\n * Sums all numbers in an array\n */\nfunction sum(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n`,
  `\n/**\n * Returns the max value in an array\n */\nfunction maxVal(arr) {\n  return Math.max(...arr);\n}\n`,
  `\n/**\n * Shuffles an array in place\n */\nfunction shuffle(arr) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n}\n`,
  `\n/**\n * Groups array items by a key\n */\nfunction groupBy(arr, key) {\n  return arr.reduce((acc, item) => {\n    (acc[item[key]] = acc[item[key]] || []).push(item);\n    return acc;\n  }, {});\n}\n`,
];

const dateSnippets = [
  `\n/**\n * Returns the current timestamp as a readable string\n */\nfunction nowReadable() {\n  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });\n}\n`,
  `\n/**\n * Adds N days to a date\n */\nfunction addDays(date, n) {\n  const d = new Date(date);\n  d.setDate(d.getDate() + n);\n  return d;\n}\n`,
  `\n/**\n * Returns the day name (Monday, Tuesday...)\n */\nfunction getDayName(date = new Date()) {\n  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });\n}\n`,
];

// ─── Commit message pools ────────────────────────────────────────────────────

const commitMessages = {
  feat:     ['feat: add new string helper util',
             'feat: add array groupBy utility',
             'feat: add date formatting helper',
             'feat: add input validation util',
             'feat: add zero-pad number helper'],
  fix:      ['fix: handle null/undefined edge case',
             'fix: correct regex pattern in validator',
             'fix: resolve off-by-one in chunk util',
             'fix: handle empty array in shuffle'],
  refactor: ['refactor: clean up string utils module',
             'refactor: simplify array flatten logic',
             'refactor: improve readability in dateUtils',
             'refactor: remove redundant checks'],
  docs:     ['docs: update README with usage examples',
             'docs: add JSDoc comments to utils',
             'docs: fix typo in function description'],
  chore:    ['chore: update .gitignore',
             'chore: minor code cleanup',
             'chore: organize imports'],
};

// ─── Helper ──────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Main Logic ──────────────────────────────────────────────────────────────

const hour = new Date().getUTCHours();

// Decide action type based on roughly what time of day it is (IST)
let action, file, snippet, msg;

if (hour >= 3 && hour < 7) {
  // Morning IST (~8:30–12:30 IST) → feature addition
  action  = 'feat';
  snippet = pick(stringSnippets);
  file    = 'utils/stringUtils.js';
  msg     = pick(commitMessages.feat);
} else if (hour >= 7 && hour < 11) {
  // Afternoon IST (~12:30–4:30 IST) → fix or refactor
  action  = pick(['fix', 'refactor']);
  snippet = pick(arraySnippets);
  file    = 'utils/arrayUtils.js';
  msg     = pick(commitMessages[action]);
} else if (hour >= 11 && hour < 15) {
  // Evening IST (~4:30–8:30 IST) → feature or docs
  action  = pick(['feat', 'docs']);
  snippet = pick(dateSnippets);
  file    = 'utils/dateUtils.js';
  msg     = pick(commitMessages[action]);
} else {
  // Night IST (~8:30–12:30 IST) → chore or refactor
  action  = pick(['chore', 'refactor']);
  snippet = `\n// last updated: ${new Date().toISOString()}\n`;
  file    = 'src/index.js';
  msg     = pick(commitMessages[action]);
}

// Append snippet to the chosen file
const filePath = path.join(__dirname, file);
fs.appendFileSync(filePath, snippet, 'utf-8');

// Write the commit message to a temp file so the shell script can read it
fs.writeFileSync(path.join(__dirname, '.commit-msg'), msg, 'utf-8');

console.log(`✅ Updated: ${file}`);
console.log(`📝 Commit message: ${msg}`);
