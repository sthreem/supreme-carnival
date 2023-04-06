# Supreme Carnival - Currency Management App
This is a simple web application for managing currencies using Vue 3, Vuex, Vue Router, Vite, SASS, and other modern web technologies. The application allows you to view the list of currencies, add, edit, and delete currencies, as well as search for currencies.

## Features
- User login (front-end only)
- Display a list of currencies in a sidebar
- Add new currencies
- Edit existing currencies
- Delete currencies
- Search for currencies based on ID, ISO mark, or symbol
- Single Page Application (SPA) architecture

## Prerequisites
- Node.js >= 12.x (recommended: the latest LTS version)
- npm (comes bundled with Node.js)

## Installation
1. Clone the repository:
```
git clone https://github.com/your-username/supreme-carnival.git
```

2. Install dependencies:
```
cd supreme-carnival
npm install
```

## Development

To start the development server, run:
```
npm run dev
```
This will start a local development server on http://localhost:5173 (or another available port if 5173 is in use).

## Building for production

To build the application for production, run:
```
npm run build
```
This will create an optimized build in the `dist` folder.

## Running tests
To run unit tests, use the following command:
```
npm test
```

## Linting
To check for linting issues, run:
```
npm run lint
```

To automatically fix auto-fixable linting issues, run:
```
npm run lint:fix
```