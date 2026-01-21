# Contributing to Academic Website

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

### Prerequisites
- Node.js 18+ (use the version specified in `.nvmrc`)
- npm 9+

### Getting Started

1. Fork and clone the repository
```bash
git clone https://github.com/lozingaro/lozingaro.github.io.git
cd lozingaro.github.io
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

The site will be available at `http://localhost:8080/`

## Development Workflow

### Running the Development Server

```bash
npm start          # Start dev server with hot reload
npm run build      # Build for development
npm run build:prod # Build for production
npm run clean      # Clean build directory
```

### Code Formatting

This project uses Prettier for code formatting:

```bash
npm run format       # Format all files
npm run format:check # Check formatting
```

## Project Structure

- `*.md` - Content pages (Markdown)
- `_layouts/` - Nunjucks templates
- `assets/` - Stylesheets, images, PDFs
- `teaching/`, `research/` - Content sections
- `.eleventy.js` - Eleventy configuration

## Commit Guidelines

- Use clear, descriptive commit messages
- Keep commits focused and atomic
- Reference issues when applicable

## Pull Request Process

1. Ensure your code follows the project's formatting standards
2. Test your changes locally
3. Update documentation if needed
4. Create a pull request with a clear description

## Questions?

Feel free to open an issue for questions or discussions.
