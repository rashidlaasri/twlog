<p align="center">
 <img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/preview.png" align="center" alt=":package: rashidlaasri/twlog" />
 <h2 align="center">twlog</h2>
 <p align="center">Beautiful browser console.log with Tailwind CSS.</p>
  <p align="center">
    <a href="https://github.com/rashidlaasri/twlog/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/rashidlaasri/twlog?style=flat&color=336791" />
    </a>
    <a href="https://github.com/rashidlaasri/twlog/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/rashidlaasri/twlog?style=flat&color=336791" />
    </a>
    <a href="https://www.npmjs.com/package/@rashidlaasri/twlog">
      <img alt="npm weekly downloads" src="https://img.shields.io/npm/dw/@rashidlaasri/twlog?style=flat&color=336791" />
    </a>
    <a href="https://www.npmjs.com/package/@rashidlaasri/twlog">
      <img alt="npm total downloads" src="https://img.shields.io/npm/dt/@rashidlaasri/twlog?color=336791&label=Total%20downloads" />
    </a>
    <a href="https://github.com/rashidlaasri/twlog/releases">
      <img alt="GitHub release" src="https://img.shields.io/github/release/rashidlaasri/twlog.svg?style=flat&color=336791" />
    </a>
    <br />
    <a href="https://github.com/rashidlaasri/twlog/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/rashidlaasri/twlog/issues/new/choose">Request Feature</a>
  </p>

## Overview

`twlog` is a small package that allows you to create beautifully styled console.log messages using Tailwind CSS classes. Transform your browser console output with custom styling, colors, and formatting - all using familiar Tailwind utility classes.

## Features

- 🎨 **Tailwind CSS Integration** - Use any Tailwind CSS utility classes to style your console output
- 🔗 **Fluent API** - Chainable methods for intuitive usage
- 📝 **Multiple Text Segments** - Combine multiple styled text segments in a single log
- 🎯 **TypeScript Support** - Full TypeScript definitions included
- 🚀 **Zero Dependencies** - Lightweight and fast
- 🧪 **Well Tested** - Comprehensive test coverage

## Setup

### Installation

Install the package using npm:

```bash
npm install @rashidlaasri/twlog
```

Or using yarn:

```bash
yarn add @rashidlaasri/twlog
```

Or using pnpm:

```bash
pnpm add @rashidlaasri/twlog
```

### Requirements

- **Browser Environment**: This package requires a browser environment with DOM APIs (`document`, `getComputedStyle`)
- **Tailwind CSS**: Your project should have Tailwind CSS configured and loaded in the browser

## Usage
The twlog() function lets you style your browser console logs using real Tailwind CSS classes — so you can make debugging, announcements, or Easter eggs look beautiful and on-brand.

Each message is built with a fluent, chainable API. Now here are some fun and useful examples 👇

### Hidden gem

```javascript
import { twlog } from '@rashidlaasri/twlog';

twlog()
  .line('👀 You found a hidden message!', 'text-pink-400 text-lg font-semibold')
  .text('We like curious people like you 💻', 'text-slate-300 italic')
  .line('We\'re hiring — join us!', 'text-green-400 font-bold')
  .text('👉 careers.example.com', 'bg-green-500/10 text-green-400 px-2 py-1 rounded-md underline')
  .log();
```

<img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/examples/hidden-gem.png" alt="twlog hidden gem">

### Security alert

```javascript
import { twlog } from '@rashidlaasri/twlog';

twlog()
  .line('⚠️ STOP!', 'text-5xl font-extrabold text-red-500')
  .line('This browser feature is intended for developers.', 'text-yellow-400 text-lg font-semibold mt-2')
  .text(
    'If someone told you to copy and paste something here to enable a feature or hack an account, it’s a scam and will give them access to your account.',
    'text-slate-500 mt-2 leading-snug'
  )
  .line('Stay safe 💙', 'text-blue-400 font-bold mt-2')
  .log();
```

<img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/examples/security-alert.png" alt="twlog security alert">

### Inspiring quote
```javascript
import { twlog } from '@rashidlaasri/twlog';

twlog()
  .line('“Simplicity is the soul of efficiency.”', 'text-purple-300 italic')
  .text('- Austin Freeman', 'text-slate-500 text-sm ml-2')
  .log();
```

<img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/examples/inspiring-quote.png" alt="twlog inspiring quote">

### Console debugging
```javascript
import { twlog } from '@rashidlaasri/twlog';

twlog()
  .text('[DEBUG]', 'text-xs font-mono text-slate-400')
  .text('Fetching user data…', 'text-blue-400')
  .log();
```

<img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/examples/console-debugging.png" alt="twlog console debugging">

### Tips & Hints

```javascript
import { twlog } from '@rashidlaasri/twlog';

twlog()
  .text('💡 Tip:', 'bg-amber-400/10 text-amber-400 inset-ring inset-ring-amber-400/20 font-medium px-2 py-1 rounded-md')
  .text('Use `twlog()` for stylish debugging ✨', 'text-slate-300 ml-2')
  .log();
```

<img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/examples/tips-hints.png" alt="twlog tips and hints">

### Dev tools onboarding

```javascript
import { twlog } from '@rashidlaasri/twlog';

twlog()
  .line('👋 Welcome to the dev console!', 'text-emerald-400 font-semibold text-lg')
  .text('This project uses Tailwind, Vue, and Vite.', 'text-slate-300 italic')
  .text('Find our docs at → dev.example.com/docs', 'text-blue-400 underline')
  .log();
```

<img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/examples/onboarding.png" alt="twlog onboarding">

### Marketing / Annoucement drops

```javascript
import { twlog } from '@rashidlaasri/twlog';

twlog()
  .text('🔥 New Feature Released:', 'text-pink-400 font-bold')
  .text('Dark Mode is now live! 🌙', 'text-white bg-slate-800 px-2 py-1 rounded')
  .text('Try it now → example.com/settings', 'text-sky-400 underline ml-2')
  .log();
```

<img src="https://github.com/rashidlaasri/twlog/blob/main/.github/images/examples/marketing.png" alt="twlog marketing">

### API Reference

#### `twlog()`

Creates a new `TwLogger` instance.

**Returns:** `TwLogger`

#### `.text(text: string, classes?: string)`

Adds a text segment with optional Tailwind CSS classes.

**Parameters:**
- `text` (string): The text to display
- `classes` (string, optional): Tailwind CSS utility classes

**Returns:** `TwLogger` (for chaining)

#### `.line(text: string, classes?: string)`

Adds a text segment with newlines before and after.

**Parameters:**
- `text` (string): The text to display
- `classes` (string, optional): Tailwind CSS utility classes

**Returns:** `TwLogger` (for chaining)

#### `.log()`

Outputs all accumulated text segments to the console with their respective styles.

**Returns:** `void`

## Development

### Building the Project

```bash
npm run build
```

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

### Reporting Issues

If you find a bug or have a feature request:

Check if the issue already exists in the [Issues](https://github.com/rashidlaasri/twlog/issues) section, if not, please create one.

## 📝 License

Copyright © 2025 [@rashidlaasri](https://github.com/rashidlaasri).

This project is [MIT](LICENSE) licensed.

## Show your support

Give a ⭐️ if this project helps you and <a href="https://github.com/rashidlaasri"> follow me on X 🙌🏾 </a>

---

Made with ❤️ for beautiful console logs
