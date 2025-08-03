#!/bin/bash
# Deployment script for GoHighLevel

echo "🚀 Building for GoHighLevel deployment..."

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Limpiar build anterior
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Build para producción
echo "🔨 Building production version..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d "dist" ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📁 Files ready for GoHighLevel:"
echo "   - Main HTML: dist/index.html"
echo "   - Assets: dist/assets/"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GoHighLevel dashboard"
echo "2. Navigate to Sites → Websites/Funnels"
echo "3. Create new page or edit existing one"
echo "4. Upload the contents of the 'dist' folder"
echo "5. Set dist/index.html as your main page"
