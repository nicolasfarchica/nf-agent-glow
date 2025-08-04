#!/bin/bash

# 🚀 Script de Deployment para VPS Hostinger - nfagent.ai
# Autor: Automatizado para nicolasfarchica/nf-agent-glow

set -e  # Detener el script si hay algún error

echo "🚀 Iniciando deployment de nfagent.ai..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variables
PROJECT_DIR="/var/www/nf-agent-glow"
DOMAIN="nfagent.ai"
IP_SERVER="31.97.185.124"

echo -e "${YELLOW}📋 Configuración:${NC}"
echo "   - Dominio: $DOMAIN"
echo "   - Servidor: $IP_SERVER"
echo "   - Directorio: $PROJECT_DIR"
echo ""

# Función para verificar si un comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Función para instalar dependencias
install_dependencies() {
    echo -e "${YELLOW}📦 Instalando dependencias del sistema...${NC}"
    
    # Actualizar sistema
    apt update && apt upgrade -y
    
    # Instalar Node.js 18.x si no existe
    if ! command_exists node; then
        echo "📥 Instalando Node.js..."
        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
        apt-get install -y nodejs
    else
        echo "✅ Node.js ya está instalado: $(node --version)"
    fi
    
    # Instalar Nginx si no existe
    if ! command_exists nginx; then
        echo "📥 Instalando Nginx..."
        apt install nginx -y
        systemctl enable nginx
    else
        echo "✅ Nginx ya está instalado"
    fi
    
    # Instalar Git si no existe
    if ! command_exists git; then
        echo "📥 Instalando Git..."
        apt install git -y
    else
        echo "✅ Git ya está instalado"
    fi
    
    # Instalar Certbot para SSL
    if ! command_exists certbot; then
        echo "📥 Instalando Certbot para SSL..."
        apt install certbot python3-certbot-nginx -y
    else
        echo "✅ Certbot ya está instalado"
    fi
}

# Función para clonar o actualizar el repositorio
setup_project() {
    echo -e "${YELLOW}📁 Configurando proyecto...${NC}"
    
    if [ -d "$PROJECT_DIR" ]; then
        echo "📂 Directorio existe, actualizando..."
        cd $PROJECT_DIR
        git pull origin main
    else
        echo "📥 Clonando repositorio..."
        cd /var/www/
        git clone https://github.com/nicolasfarchica/nf-agent-glow.git
        cd $PROJECT_DIR
    fi
    
    echo "📦 Instalando dependencias de Node.js..."
    npm install
    
    echo "🔨 Construyendo proyecto para producción..."
    npm run build
    
    # Verificar que el build fue exitoso
    if [ ! -f "dist/index.html" ]; then
        echo -e "${RED}❌ Error: El build no generó dist/index.html${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Proyecto construido exitosamente${NC}"
}

# Función para configurar Nginx
setup_nginx() {
    echo -e "${YELLOW}⚙️ Configurando Nginx...${NC}"
    
    # Crear configuración de Nginx
    cat > /etc/nginx/sites-available/$DOMAIN << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    root $PROJECT_DIR/dist;
    index index.html;

    # Configuración para SPA (Single Page Application)
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Optimización para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Log files
    access_log /var/log/nginx/${DOMAIN}_access.log;
    error_log /var/log/nginx/${DOMAIN}_error.log;
}
EOF

    # Activar el sitio
    ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
    
    # Remover configuración por defecto si existe
    if [ -f "/etc/nginx/sites-enabled/default" ]; then
        rm /etc/nginx/sites-enabled/default
    fi
    
    # Probar configuración
    nginx -t
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Configuración de Nginx válida${NC}"
        systemctl restart nginx
    else
        echo -e "${RED}❌ Error en la configuración de Nginx${NC}"
        exit 1
    fi
}

# Función para configurar SSL
setup_ssl() {
    echo -e "${YELLOW}🔒 Configurando SSL con Let's Encrypt...${NC}"
    
    # Verificar que el dominio apunte al servidor
    echo "🔍 Verificando DNS..."
    if ! nslookup $DOMAIN | grep -q $IP_SERVER; then
        echo -e "${YELLOW}⚠️ Advertencia: El dominio $DOMAIN no parece apuntar a $IP_SERVER${NC}"
        echo "   Por favor configura los registros DNS antes de continuar con SSL"
        read -p "¿Continuar sin SSL? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            return 0
        fi
    fi
    
    # Obtener certificado SSL
    certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ SSL configurado exitosamente${NC}"
    else
        echo -e "${YELLOW}⚠️ SSL no pudo configurarse automáticamente${NC}"
        echo "   Puedes configurarlo manualmente más tarde con:"
        echo "   certbot --nginx -d $DOMAIN -d www.$DOMAIN"
    fi
}

# Función para verificar el deployment
verify_deployment() {
    echo -e "${YELLOW}🔍 Verificando deployment...${NC}"
    
    # Verificar que Nginx esté corriendo
    if systemctl is-active --quiet nginx; then
        echo -e "${GREEN}✅ Nginx está corriendo${NC}"
    else
        echo -e "${RED}❌ Nginx no está corriendo${NC}"
        systemctl start nginx
    fi
    
    # Verificar que el sitio responda
    if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
        echo -e "${GREEN}✅ Sitio web responde correctamente${NC}"
    else
        echo -e "${RED}❌ El sitio web no responde${NC}"
        echo "Revisando logs de Nginx..."
        tail -n 10 /var/log/nginx/error.log
    fi
    
    # Mostrar información del deployment
    echo ""
    echo -e "${GREEN}🎉 ¡Deployment completado!${NC}"
    echo ""
    echo -e "${YELLOW}📋 Información del sitio:${NC}"
    echo "   🌐 URL: http://$DOMAIN"
    echo "   🌐 URL: http://www.$DOMAIN"
    echo "   📁 Directorio: $PROJECT_DIR"
    echo "   📊 Logs: /var/log/nginx/${DOMAIN}_*.log"
    echo ""
    echo -e "${YELLOW}📋 Comandos útiles:${NC}"
    echo "   - Ver logs: tail -f /var/log/nginx/${DOMAIN}_error.log"
    echo "   - Reiniciar Nginx: systemctl restart nginx"
    echo "   - Actualizar sitio: cd $PROJECT_DIR && git pull && npm run build && systemctl reload nginx"
    echo ""
}

# Función principal
main() {
    echo -e "${GREEN}🚀 Comenzando deployment automatizado de $DOMAIN${NC}"
    echo ""
    
    # Verificar que se ejecuta como root
    if [ "$EUID" -ne 0 ]; then
        echo -e "${RED}❌ Este script debe ejecutarse como root (sudo)${NC}"
        exit 1
    fi
    
    install_dependencies
    setup_project
    setup_nginx
    setup_ssl
    verify_deployment
    
    echo -e "${GREEN}🎉 ¡Deployment completado exitosamente!${NC}"
}

# Ejecutar función principal
main "$@"
