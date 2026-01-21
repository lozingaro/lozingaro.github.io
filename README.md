# Academic Website

Personal academic website for **Stefano Pio Zingaro**.

## About

This is the repository for my academic website built with [Eleventy](https://www.11ty.dev/) - a simpler static site generator powered by Node.js (replacing Jekyll).

The website includes:
- Research projects and publications
- Teaching materials and courses
- Talks and presentations
- Contact information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/lozingaro/academic-website.git
cd academic-website

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:8080/`

### Build

```bash
# Build for production
npm run build:prod

# Output will be in _site/
```

## 📁 Project Structure

```
academic-website/
├── .eleventy.js              # Eleventy configuration
├── package.json              # Node.js dependencies
├── _layouts/                 # HTML templates (Nunjucks)
│   ├── default.njk
│   └── page.njk
├── assets/                   # CSS, images, PDFs
│   ├── main.scss             # Main stylesheet
│   ├── css/
│   ├── img/
│   └── pdf/
├── *.markdown                # Content pages (root)
├── research/                 # Research section
├── teaching/                 # Teaching section
└── _site/                    # Build output (generated)
```

## 🔧 Technologies

- **Static Generator**: [Eleventy](https://www.11ty.dev/)
- **Templating**: Nunjucks
- **Styling**: SCSS
- **Build**: Node.js with npm
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## 📝 Content

- **Markdown files** (`.markdown`) in the root and subdirectories
- Each page has front matter with layout and metadata
- All content is processed to HTML and served as a static site

## 🌐 Deployment

The website is automatically deployed via **GitHub Actions** when you push to `main`:

### Automatic Deployment Flow
1. **Trigger**: Push to `main` branch
2. **Build**: GitHub Actions runs `npm run build:prod`
3. **Test**: Linting validation with Eleventy
4. **Deploy**: Static files in `_site/` are deployed to GitHub Pages
5. **Live**: Site is live at: `https://cs.unibo.it/~zingaro/`

### GitHub Pages Configuration
- Ensure GitHub Pages is enabled in repository settings
- Set build source to: **GitHub Actions**
- Custom domain: `cs.unibo.it` (optional)

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the site
npm run build:prod

# Deploy with rsync (example)
rsync -azPv _site/ user@host:/path/to/public_html/
```

### Workflow Files
- `.github/workflows/eleventy-build-deploy.yml` - Main CI/CD pipeline
- `.github/workflows/lint-eleventy.yml` - Build validation

## 📚 Development

### Adding Content

1. Create a `.markdown` file with front matter:
```yaml
---
layout: page
title: My Page
permalink: /my-page/
---

Your content here...
```

2. The file will be automatically processed and accessible at the permalink

### Modifying Styles

- Edit `assets/main.scss`
- SCSS is automatically compiled to CSS
- Changes are live-reloaded in development mode

### Updating Navigation

Edit the navigation in `_layouts/default.njk`:
```html
<a class="page-link" href="/new-page/">New Page</a>
```

## 🔄 Recent Migration

This site was migrated from **Jekyll** to **Eleventy** in December 2025:
- ✅ All markdown content preserved
- ✅ Modern Node.js tooling
- ✅ Faster build times
- ✅ Simplified dependency management

See [ELEVENTY-MIGRATION.md](./ELEVENTY-MIGRATION.md) and [CLEANUP-SUMMARY.md](./CLEANUP-SUMMARY.md) for details.

## 📄 License

This website is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

---

**Last Updated**: December 10, 2025
