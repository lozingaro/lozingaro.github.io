#!/bin/bash
# Migration script: Eleventy → Static HTML

echo "🚀 Migrating to static HTML site..."

# Step 1: Build final version
echo "📦 Building final version with Eleventy..."
npm run build:prod

# Step 2: Copy _site to public
echo "📁 Copying _site/ to public/..."
rm -rf public/*
cp -r _site/* public/

# Step 3: Backup old files
echo "💾 Creating backup..."
mkdir -p .migration-backup
mv package.json package-lock.json .eleventy.js .eleventyignore \
   build.sh .editorconfig .nvmrc .prettierrc .prettierignore \
   CONTRIBUTING.md .migration-backup/ 2>/dev/null

# Move old markdown sources
mv *.md .migration-backup/ 2>/dev/null
mv teaching/ research/ assets/ _layouts/ .migration-backup/ 2>/dev/null

# Step 4: Install new config
echo "⚙️  Installing new configuration..."
mv .gitignore.new .gitignore
mv README.new.md README.md

# Step 5: Clean up
echo "🧹 Cleaning up..."
rm -rf node_modules/ _site/

# Step 6: Git status
echo "✅ Migration complete!"
echo ""
echo "📊 Git status:"
git status --short

echo ""
echo "Next steps:"
echo "1. Review changes: git status"
echo "2. Test locally: python -m http.server 8000 --directory public"
echo "3. Commit: git add -A && git commit -m 'Migrate to static HTML'"
echo "4. Push: git push"
echo ""
echo "Backup of old files in: .migration-backup/"
