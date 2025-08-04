#!/bin/bash

# 🔄 Script de Actualización Rápida para nfagent.ai
# Para usar después del primer deployment

set -e

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PROJECT_DIR="/var/www/nf-agent-glow"
DOMAIN="nfagent.ai"

echo -e "${YELLOW}🔄 Actualizando $DOMAIN...${NC}"

# Verificar que el directorio existe
if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ El proyecto no está instalado. Ejecuta deploy-vps.sh primero."
    exit 1
fi

cd $PROJECT_DIR

echo "📥 Descargando últimos cambios..."
git pull origin main

echo "📦 Instalando/actualizando dependencias..."
npm install

echo "🔨 Construyendo nueva versión..."
npm run build

echo "🔄 Recargando servidor web..."
systemctl reload nginx

echo -e "${GREEN}✅ ¡Actualización completada!${NC}"
echo "🌐 Tu sitio está disponible en: https://$DOMAIN"
