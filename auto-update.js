#!/usr/bin/env node
// auto-update.js — simulates realistic dev commits with random count & timing

const fs          = require('fs');
const path        = require('path');
const { execSync } = require('child_process');

// ─── Snippet Pools ───────────────────────────────────────────────────────────

const stringSnippets = [
  `\n/**\n * Checks if a string is a valid email\n */\nfunction isEmail(str) {\n  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(str);\n}\n`,
  `\n/**\n * Reverses a string\n */\nfunction reverseStr(str) {\n  return str.split('').reverse().join('');\n}\n`,
  `\n/**\n * Counts words in a string\n */\nfunction wordCount(str) {\n  return str.trim().split(/\\s+/).length;\n}\n`,
  `\n/**\n * Pads a number with leading zeros\n */\nfunction zeroPad(num, size = 2) {\n  return String(num).padStart(size, '0');\n}\n`,
  `\n/**\n * Converts camelCase to snake_case\n */\nfunction toSnakeCase(str) {\n  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase());\n}\n`,
  `\n/**\n * Checks if string contains only digits\n */\nfunction isNumeric(str) {\n  return /^\\d+$/.test(str);\n}\n`,
  `\n/**\n * Removes special characters from string\n */\nfunction stripSpecialChars(str) {\n  return str.replace(/[^a-zA-Z0-9 ]/g, '');\n}\n`,
];

const arraySnippets = [
  `\n/**\n * Sums all numbers in an array\n */\nfunction sum(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n`,
  `\n/**\n * Returns the max value in an array\n */\nfunction maxVal(arr) {\n  return Math.max(...arr);\n}\n`,
  `\n/**\n * Shuffles an array in place\n */\nfunction shuffle(arr) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n}\n`,
  `\n/**\n * Groups array items by a key\n */\nfunction groupBy(arr, key) {\n  return arr.reduce((acc, item) => {\n    (acc[item[key]] = acc[item[key]] || []).push(item);\n    return acc;\n  }, {});\n}\n`,
  `\n/**\n * Returns min value in an array\n */\nfunction minVal(arr) {\n  return Math.min(...arr);\n}\n`,
  `\n/**\n * Checks if array is empty\n */\nfunction isEmpty(arr) {\n  return !arr || arr.length === 0;\n}\n`,
];

const dateSnippets = [
  `\n/**\n * Returns current IST timestamp as readable string\n */\nfunction nowIST() {\n  return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });\n}\n`,
  `\n/**\n * Adds N days to a date\n */\nfunction addDays(date, n) {\n  const d = new Date(date);\n  d.setDate(d.getDate() + n);\n  return d;\n}\n`,
  `\n/**\n * Returns the day name (Monday, Tuesday...)\n */\nfunction getDayName(date = new Date()) {\n  return new Date(date).toLocaleDateString('en-IN', { weekday: 'long' });\n}\n`,
  `\n/**\n * Checks if a date is in the past\n */\nfunction isPast(date) {\n  return new Date(date) < new Date();\n}\n`,
];

// ─── Commit Message Pools ────────────────────────────────────────────────────

const commitMessages = {
  feat:     [
    'feat: add new string helper util',
    'feat: add array groupBy utility',
    'feat: add date formatting helper',
    'feat: add input validation util',
    'feat: add zero-pad number helper',
    'feat: add isEmpty array check',
    'feat: add isPast date utility',
  ],
  fix:      [
    'fix: handle null/undefined edge case',
    'fix: correct regex in validator',
    'fix: resolve off-by-one in chunk util',
    'fix: handle empty array in shuffle',
    'fix: fix return type in dateUtils',
  ],
  refactor: [
    'refactor: clean up string utils module',
    'refactor: simplify array flatten logic',
    'refactor: improve readability in dateUtils',
    'refactor: remove redundant null checks',
    'refactor: rename internal variables for clarity',
  ],
  docs:     [
    'docs: update README with usage examples',
    'docs: add JSDoc comments to utils',
    'docs: fix typo in function description',
    'docs: add return type annotations',
  ],
  chore:    [
    'chore: update .gitignore',
    'chore: minor code cleanup',
    'chore: organize imports in index.js',
    'chore: remove unused comments',
  ],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Sleep for N milliseconds (used to space out commits)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Random integer between min and max (inclusive)
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ─── Single Commit Action ────────────────────────────────────────────────────

function makeChange() {
  const type = pick(['feat', 'feat', 'fix', 'refactor', 'docs', 'chore']); // feat weighted more
  let file, snippet;

  const target = pick(['string', 'array', 'date']);
  if (target === 'string') {
    file    = 'utils/stringUtils.js';
    snippet = pick(stringSnippets);
  } else if (target === 'array') {
    file    = 'utils/arrayUtils.js';
    snippet = pick(arraySnippets);
  } else {
    file    = 'utils/dateUtils.js';
    snippet = pick(dateSnippets);
  }

  const filePath = path.join(__dirname, file);
  fs.appendFileSync(filePath, snippet, 'utf-8');

  const msg = pick(commitMessages[type]);

  execSync('git add -A');
  execSync(`git config --global user.name "Rohan"`);
  execSync(`git config --global user.email "your-email@gmail.com"`);
  execSync(`git commit -m "${msg}"`);

  console.log(`✅ Committed: ${msg}`);
  return msg;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  // Random number of commits today: 1, 2, 3, or 4
  // Weighted: more likely to be 2 or 3 (realistic)
  const countOptions = [1, 2, 2, 3, 3, 3, 4];
  const totalCommits = pick(countOptions);

  console.log(`📅 Today's commit count: ${totalCommits}`);

  // Initial random delay (0–45 min) so it doesn't always start at exact cron time
  const initialDelay = randInt(0, 45 * 60 * 1000);
  console.log(`⏳ Initial delay: ${Math.round(initialDelay / 60000)} min`);
  await sleep(initialDelay);

  for (let i = 0; i < totalCommits; i++) {
    makeChange();

    // Wait 30–90 minutes between commits (except after last one)
    if (i < totalCommits - 1) {
      const gap = randInt(30, 90) * 60 * 1000;
      console.log(`⏳ Waiting ${Math.round(gap / 60000)} min before next commit...`);
      await sleep(gap);
    }
  }

  console.log(`🟩 Done! ${totalCommits} commits made today.`);
}

main().catch(console.error);
