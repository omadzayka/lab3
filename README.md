# University Course Management System

Run with `node main.js` (Node 14+; `package.json` sets `"type": "module"` for ES module imports).

## File organization
- `models.js` – `Student` class. `id` is defined with `Object.defineProperty` (`writable: false`, `configurable: false`). Has `addCourse` and `getAverage`.
- `database.js` – `fetchStudents(callback)` simulates a 2-second DB delay with `setTimeout`.
- `analytics.js` – `calculateClassAverage`, `findTopStudent` (uses `reduce`), `filterStudents` (higher-order function).
- `main.js` – entry point: fetches data, builds `Student` instances, tests immutability, prints the report.

## Challenges
- ES modules run in strict mode, so assigning to a read-only property throws a `TypeError` instead of failing silently. I wrapped the assignment in `try/catch` and then checked that the id was unchanged.
- Getting `import`/`export` to work in Node required `"type": "module"` in `package.json`.
- The sample output in the assignment lists Zeynep (82.5) as top student, but Ali's average is (90+85)/2 = 87.5, so the program correctly prints Ali.