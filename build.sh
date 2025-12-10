#!/bin/bash
# Academic Website Build and Deploy Script for Eleventy

echo "🔄 Updating repository..."
git pull

echo "📦 Installing dependencies..."
npm ci

echo "🏗️  Building site..."
npm run build:prod

echo "✅ Build complete! Output in _site/"
echo ""
echo "To deploy, use GitHub Actions (automatic on push to main)"
echo "Or manually deploy with rsync:"
echo "  rsync -azPv _site/ user@host:/path/to/public_html/"
