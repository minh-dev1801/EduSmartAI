# Edu smart ai

![Demo](demo.png)

## Features

- 🚀 Display product list using MockAPI
- ⚡️ Search for products by name and filter products by price
- 📦 Smart suggestion button for products based on history and favorites
- 🔄 Click to view details will show a modal with full product information
- ⚡️ Allows marking favorites and saving history of viewed products
- 🔒 Responsive for all screen sizes
- 🎉 TailwindCSS for styling
- 🚀 Uses TypeScript
- 🔒 Has skeleton loading, popups, and notifications

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Vercel Deployment

Vercel is a great platform for deploying static frontend applications like this Vite + React project. It offers free hosting, automatic deployments, and custom domains.

#### Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com/signup)).
- Your project pushed to a Git repository (e.g., GitHub, GitLab, or Bitbucket).

#### Deployment Steps

1. **Import Your Project**:

   - Go to the Vercel Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard).
   - Click "New Project" and import your repository from Git.
   - Vercel will automatically detect your Vite project.

2. **Configure Build Settings** (usually auto-detected, but verify):

   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (or `vite build` if customized)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install` (or `yarn install` if using Yarn)

3. **Deploy**:
   - Click "Deploy". Vercel will build your project and provide a live URL (e.g., `your-project-name.vercel.app`).
   - Future pushes to your Git main branch will trigger automatic redeployments.
