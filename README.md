# Academic Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Personal academic website for **Stefano Pio Zingaro** - Junior Assistant Professor of Computer Science at the University of Bologna.

🌐 **Live Site**: [https://lozingaro.github.io](https://lozingaro.github.io)

## 📖 About

Static HTML website containing:
- Research projects and publications
- Teaching materials and courses
- Talks and presentations
- Contact information

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/lozingaro/lozingaro.github.io.git
cd lozingaro.github.io

# Serve locally (choose one)
python -m http.server 8000 --directory public
# or
npx serve public
# or
php -S localhost:8000 -t public
```

Visit `http://localhost:8000`

### Editing Content

Simply edit HTML files directly in the `public/` directory:

```bash
# Edit any page
code public/teaching/index.html

# View changes locally
python -m http.server 8000 --directory public

# Deploy
git add public/
git commit -m "Update teaching page"
git push
```

## 📁 Project Structure

```
lozingaro.github.io/
├── public/                # Static website (served by GitHub Pages)
│   ├── index.html         # Home page
│   ├── 404.html           # Error page
│   ├── robots.txt         # SEO configuration
│   ├── .nojekyll          # Disable Jekyll processing
│   ├── contact/
│   ├── teaching/          # Teaching materials
│   │   ├── ai-info/       # AI course
│   │   ├── ml-bbs/        # ML course
│   │   └── ...
│   ├── research/          # Research projects
│   ├── publications/
│   ├── talks/
│   └── assets/            # Static assets
│       ├── main.css       # Compiled CSS
│       ├── img/           # Images and icons
│       ├── pdf/           # PDF documents
│       └── conf/          # Config files
├── .gitignore
├── LICENSE
└── README.md
```

## 🛠️ Technologies

- **Pure HTML/CSS/JS** - No build tools, no dependencies
- **Hosting**: GitHub Pages
- **CI/CD**: Automatic deployment on push to `main`

## 📝 Content Management

All content is in standard HTML. To update:

1. Edit HTML files in `public/`
2. Test locally with any HTTP server
3. Commit and push changes
4. Site updates automatically via GitHub Pages

No build process, no compilation, no dependencies.

## 🌐 Deployment

The website is automatically deployed via **GitHub Pages**:

1. Push changes to `main` branch
2. GitHub Pages serves the `public/` directory
3. Site updates at [https://lozingaro.github.io](https://lozingaro.github.io)

### GitHub Pages Configuration

In repository settings:
- **Source**: Deploy from a branch
- **Branch**: `main`
- **Folder**: `/public`

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

**Pure static HTML** - No build tools, no dependencies, AI-friendly ✨
