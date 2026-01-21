# Academic Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Eleventy](https://img.shields.io/badge/Eleventy-3.0-blue)](https://www.11ty.dev/)

Personal academic website for **Stefano Pio Zingaro** - Junior Assistant Professor of Computer Science at the University of Bologna.

🌐 **Live Site**: [https://lozingaro.github.io](https://lozingaro.github.io)

## 📖 About

This is the repository for my academic website built with [Eleventy](https://www.11ty.dev/) - a simpler static site generator powered by Node.js.

The website includes:
- Research projects and publications
- Teaching materials and courses
- [Node.js](https://nodejs.org/) 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm) and `.nvmrc`)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/lozingaro/lozingaro.github.io.git
cd lozingaro.github.io

# Use correct Node version (if using nvm)
nvm use

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:8080/` with live reload enabled.

### Available Commands

```bash
npm start          # Start development server with live reload
npm run dev        # Alias for start
npm run build      # Build for development
npm run build:prod # Build for production (optimized)
npm run clean      # Clean build directory
npm run format     # Format code with Prettier
npm run format:check # Check code formatting

```bash
# Build for production
npm run build:prod

lozingaro.github.io/
├── .eleventy.js           # Eleventy configuration
├── .editorconfig          # Editor configuration
├── .nvmrc                 # Node version specification
├── .prettierrc            # Prettier configuration
├── package.json           # Dependencies and scripts
├── build.sh               # Build script
├── _layouts/              # Nunjucks templates
│   ├── default.njk        # Default layout
│   └── page.njk           # Page layout
├── assets/                # Static assets
│   ├── main.scss          # Main stylesheet
│   ├── css/               # Additional styles
│   ├── img/               # Images and icons
│   ├── pdf/               # PDF documents
│   └── conf/              # Configuration files
├── teaching/              # Teaching materials
│   ├── ai-info/           # AI course materials
│   ├── kids-coding-week/  # Kids coding materials
│   ├── ml-Site Generator**: [Eleventy](https://www.11ty.dev/) v3.0
- **Templating**: [Nunjucks](https://mozilla.github.io/nunjucks/)
- **Styling**: [SCSS/Sass](https://sass-lang.com/)
- **Syntax Highlighting**: Prism.js via Eleventy plugin
- **Build**: Node.js with npm
- **Code Quality**: Prettier
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## 📝 Content Management

### Adding Content

- **Pages**: Create `.md` files in the root or appropriate subdirectory
- **Front Matter**: Each page needs YAML front matter with `layout`, `title`, and `permalink`
- **Assets**: Place images in `assets/img/`, PDFs in `assets/pdf/`

Example front matter:
```yaml
---
layout: page
title: My Page Title
permalink: /my-page/
---
```

### Content Organization

- Root `.md` files: Main pages (index, contact, teaching, research, etc.)
- `teaching/`: Course materials and teaching resources
- `research/`: Research projects and publications
- `assets/`: All static assets (styles, images, PDFs)

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [https://lozingaro.github.io](https://lozingaro.github.io)
- **University Profile**: [UniBo](https://www.unibo.it/sitoweb/stefano.zingaro)
- **Inria Profile**: [FOCUS Team](https://team.inria.fr/focus/)

## 📧 Contact

Stefano Pio Zingaro  
📧 stefano.zingaro@unibo.it  
🏛️ Department of Computer Science and Engineering, University of Bologna

---

## 🛠️ Development Notes

### Migration History

This site was migrated from **Jekyll** to **Eleventy** in December 2024 for:
- Better performance and build times
- Simpler configuration
- Modern JavaScript tooling
- More flexible templating with Nunjucks

### Code Quality

- **EditorConfig**: Consistent coding styles across editors
- **Prettier**: Automatic code formatting
- **Node Version**: Specified in `.nvmrc` for consistency

### Deployment

The website is automatically deployed via **GitHub Actions** when you push to `main`:

1. **Build**: GitHub Actions runs `npm run build:prod`
2. **Test**: Linting validation with Eleventy
3. **Deploy**: Static files in `_site/` are deployed to GitHub Pages
4. **Live**: Site updates at [https://lozingaro.github.io](https://lozingaro.github.io)

### Environment Variables

For production builds, set `ELEVENTY_ENV=production` (automatically set in CI/CD).

---

Made with ❤️ using [Eleventy](https://www.11ty.dev/)

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
