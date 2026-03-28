# Web Dev Talks website 2.0

## Description

This is the repository of our official website [webdevtalks](http://webdevtalks.mx)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives
- React Router
- i18next

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:

```bash
git clone git@github.com:webdevtalks/webdevtalks.github.io.git
```

2. Navigate into the project directory:

```bash
cd webdevtalks.github.io
```

3. Install dependencies:

```bash
npm ci
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev`: start the Vite dev server
- `npm run build`: type-check and create the production build in `dist/`
- `npm run lint`: run ESLint
- `npm run preview`: preview the production build locally

## Environment

The app uses `VITE_BASE_URL` for routing and i18n asset loading.

Current local setup:

```bash
VITE_BASE_URL=''
```

Use the correct base path if the site is deployed under a subdirectory.

## Deployment

Deployment is handled by GitHub Actions in [.github/workflows/gh-pages.yml](/Users/staff/projects/webdevtalsk2.0/.github/workflows/gh-pages.yml).

On every push to `main`, the workflow:

1. Installs dependencies with `npm ci`
2. Builds the app with `npm run build`
3. Deploys the contents of `dist/` to GitHub Pages

The repo also includes:

- [404.html](/Users/staff/projects/webdevtalsk2.0/404.html) for GitHub Pages SPA routing
- [CNAME](/Users/staff/projects/webdevtalsk2.0/CNAME) for the custom domain
