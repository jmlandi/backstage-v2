#!/bin/bash

# Backstage Website - Quick Setup Script
# This script helps you get started quickly

echo "🎭 Backstage Produtora - Website Setup"
echo "======================================"
echo ""

# Check Node.js
echo "📦 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js $NODE_VERSION found"
echo ""

# Install dependencies
echo "📥 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo ""

# Check for .env file
echo "🔐 Checking environment configuration..."
if [ ! -f .env ]; then
    echo "⚠️  .env file not found"
    echo "   Creating .env from .env.example..."
    cp .env.example .env
    echo "✅ .env file created"
    echo "   ⚠️  Please edit .env and add your DATABASE_URL"
    echo ""
fi

# Check for assets
echo "🎨 Checking assets..."
FONTS_DIR="public/fonts"
IMAGES_DIR="public/images"

if [ -z "$(ls -A $FONTS_DIR 2>/dev/null | grep -v README)" ]; then
    echo "⚠️  No fonts found in $FONTS_DIR"
    echo "   Please add SpaceGrotesk font files (see ASSETS_GUIDE.md)"
fi

if [ -z "$(ls -A $IMAGES_DIR 2>/dev/null | grep -v README)" ]; then
    echo "⚠️  No images found in $IMAGES_DIR"
    echo "   Please add required images (see ASSETS_GUIDE.md)"
fi
echo ""

# Final instructions
echo "======================================"
echo "🎉 Setup Complete!"
echo "======================================"
echo ""
echo "📚 Next Steps:"
echo ""
echo "1. Add assets:"
echo "   - Fonts: public/fonts/ (see ASSETS_GUIDE.md)"
echo "   - Images: public/images/ (see ASSETS_GUIDE.md)"
echo ""
echo "2. Configure database:"
echo "   - Create Neon database (see DATABASE_SETUP.md)"
echo "   - Update .env with DATABASE_URL"
echo ""
echo "3. Start development:"
echo "   npm run dev"
echo "   or"
echo "   npm run netlify:dev (with functions)"
echo ""
echo "4. Build for production:"
echo "   npm run build"
echo ""
echo "5. Deploy:"
echo "   See DEPLOYMENT.md for complete instructions"
echo ""
echo "📖 Documentation:"
echo "   - README.md - Full project documentation"
echo "   - QUICKSTART.md - Quick start guide"
echo "   - CHECKLIST.md - Pre-launch checklist"
echo "   - PROJECT_SUMMARY.md - Complete overview"
echo ""
echo "Need help? Check the documentation files!"
echo ""
