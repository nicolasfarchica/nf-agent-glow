#!/bin/bash

# ================================
# Deployment Script for Hostinger Shared Hosting
# ================================

echo "🚀 Starting deployment to Hostinger..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Build the project
echo "🔨 Building the project..."
npm run build

# Step 3: Create deployment package
echo "📦 Creating deployment package..."
zip -r dist.zip dist/*

echo "✅ Build complete!"
echo ""
echo "📋 MANUAL STEPS FOR HOSTINGER:"
echo "================================"
echo ""
echo "1. LOGIN TO HOSTINGER:"
echo "   - Go to hPanel (https://hpanel.hostinger.com)"
echo "   - Navigate to your hosting account"
echo ""
echo "2. UPLOAD FILES:"
echo "   - Go to 'File Manager' in hPanel"
echo "   - Navigate to 'public_html' folder"
echo "   - Delete old files if needed (keep .htaccess if exists)"
echo "   - Upload all files from 'dist' folder"
echo ""
echo "3. ALTERNATIVE - Using FTP:"
echo "   - Use FileZilla or any FTP client"
echo "   - Host: Your domain or FTP hostname"
echo "   - Username: Your FTP username"
echo "   - Password: Your FTP password"
echo "   - Port: 21"
echo "   - Upload contents of 'dist' folder to 'public_html'"
echo ""
echo "4. CONFIGURE .htaccess (if needed):"
echo "   - Create/edit .htaccess file in public_html"
echo "   - Add the configuration from .htaccess.hostinger file"
echo ""
echo "Your dist.zip file is ready for manual upload if preferred."
