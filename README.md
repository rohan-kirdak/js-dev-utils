# js-dev-utils

A personal collection of reusable JavaScript utility functions built while learning and working with Node.js & the MERN stack.

## Modules

### 🔤 String Utils
- `capitalize(str)` — Capitalizes first letter
- `truncate(str, maxLength)` — Truncates with ellipsis
- `toSlug(str)` — Converts to URL slug
- `cleanWhitespace(str)` — Removes extra spaces

### 📦 Array Utils
- `unique(arr)` — Removes duplicates
- `chunk(arr, size)` — Splits into chunks
- `flattenOne(arr)` — Flattens one level deep
- `randomPick(arr)` — Picks a random element

### 📅 Date Utils
- `formatDate(date)` — Formats to DD-MM-YYYY
- `daysAgo(date)` — Returns number of days since date
- `isToday(date)` — Checks if date is today

## Usage

```js
const { capitalize, chunk, formatDate } = require('./src/index');

capitalize('hello');        // "Hello"
chunk([1,2,3,4,5], 2);     // [[1,2],[3,4],[5]]
formatDate(new Date());     // "19-05-2026"
```

## Stack
- Node.js
- Pure JavaScript (no dependencies)

---

> Actively maintained and growing as I explore more patterns.
