# Repository Guidelines

## Project Structure & Module Organization

This repository currently contains a React application scaffold built with TypeScript and Vite.

- `src/main.tsx` mounts the application; `src/App.tsx` contains the main interface.
- `src/App.css` holds application styles; `src/index.css` defines global styles, theme variables, and responsive rules.
- `src/assets/` contains imported images and SVGs. `public/` contains static assets referenced by absolute paths, such as `/icons.svg`.
- `index.html` is the HTML entry point. Root configuration files cover Vite, TypeScript, and ESLint.
- `dist/` is generated build output and is ignored by Git. No test directory currently exists.

## Build, Test, and Development Commands

Run commands from the repository root:

- `npm ci`: install dependencies using `package-lock.json`.
- `npm run dev`: start the Vite development server with hot module replacement.
- `npm run build`: run TypeScript project checks, then create the production bundle in `dist/`.
- `npm run lint`: check TypeScript and TSX files with ESLint, including React Hooks and React Refresh rules.
- `npm run preview`: serve the production build locally after building.

## Coding Style & Naming Conventions

Follow existing files: use two-space indentation, single quotes in TypeScript, double quotes for JSX attributes, and no TypeScript statement semicolons. Use semicolons in CSS declarations.

Use PascalCase for React components and component filenames, such as `MenuCard.tsx`; use camelCase for functions and variables. Keep components functional and follow Hooks rules. Prefer existing CSS variables for shared colors and typography. ESLint is configured in `eslint.config.js`; no dedicated formatter is configured.

## Testing Guidelines

No automated test framework, `npm test` script, or coverage threshold is configured. Before submitting code changes, run `npm run lint` and `npm run build`, then manually verify affected interactions, responsive layouts, and light/dark themes using `npm run dev`. If adding tests, document the chosen framework, filename convention, and runnable script.

## Commit & Pull Request Guidelines

Git history is unavailable in this workspace, so existing commit conventions cannot be verified. Use concise, imperative messages, such as `Add menu card component`, and keep commits focused.

Pull requests should describe the change and its purpose, link relevant issues, and list validation performed. Include screenshots for visible interface changes. Update `package-lock.json` alongside dependency changes; exclude generated output and `node_modules/`.
