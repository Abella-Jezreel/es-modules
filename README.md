# ES Modules in Node.js

## Overview
ES Modules (ECMAScript Modules or ESM) provide a modern way to handle JavaScript imports and exports. Since Node.js v12, ES Modules have been natively supported, offering an alternative to CommonJS (`require`).

## Setting Up ES Modules in Node.js
### 1. Use `.mjs` Extension (Optional)
If your project mixes CommonJS (`require`) and ES Modules (`import`), you can use the `.mjs` extension for ESM files:

```javascript
// example.mjs
import { sayHello } from "./utils.mjs";

sayHello();
```

### 2. Use `package.json` Configuration
If you prefer using `.js` files but still want ES Module support, add the following in your `package.json`:

```json
{
  "type": "module"
}
```

This tells Node.js to treat `.js` files as ESM by default.

## Importing and Exporting Modules
### Named Export/Import
#### `math.js`
```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### `app.js`
```javascript
import { add, subtract } from "./math.js";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

### Default Export/Import
#### `greet.js`
```javascript
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

#### `app.js`
```javascript
import greet from "./greet.js";
console.log(greet("John")); // Hello, John!
```

## Important Considerations
1. **No `require()` in ESM** – Use `import` instead.
2. **No `__dirname` and `__filename`** – Use `import.meta.url`:
   ```javascript
   import { fileURLToPath } from 'url';
   import { dirname } from 'path';

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = dirname(__filename);
   ```
3. **Top-Level `await` Support** – You can use `await` without wrapping it in an async function in ES Modules:
   ```javascript
   const data = await fetch("https://api.example.com").then(res => res.json());
   console.log(data);
   ```

## Running ES Module Files in Node.js
Use the following command:
```sh
node app.js
```
Or, if using `.mjs`:
```sh
node app.mjs
```

## Conclusion
ES Modules in Node.js provide a cleaner and standardized approach to module management. Switching from CommonJS to ESM helps improve compatibility with modern JavaScript and browser-based applications.

