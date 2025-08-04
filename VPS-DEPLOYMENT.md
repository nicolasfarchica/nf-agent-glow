# 🚀 Guía de Deployment - VPS Hostinger para nfagent.ai

## 📋 Información del Servidor
- **IP:** 31.97.185.124
- **Dominio:** nfagent.ai / www.nfagent.ai
- **SO:** Ubuntu 24.04
- **Panel:** Hostinger VPS

## 🎯 Deployment en 3 Pasos

### Paso 1: Conectarte a tu VPS
```bash
# Desde el terminal de Hostinger o SSH
ssh root@31.97.185.124
```

### Paso 2: Ejecutar el script de deployment
```bash
# Descargar y ejecutar el script
curl -sSL https://raw.githubusercontent.com/nicolasfarchica/nf-agent-glow/main/deploy-vps.sh | bash
```

### Paso 3: Configurar DNS
En tu proveedor de dominio, configura estos registros:
```
Tipo: A    | Nombre: @    | Valor: 31.97.185.124
Tipo: A    | Nombre: www  | Valor: 31.97.185.124
```

## 🔄 Actualizaciones Futuras

Para actualizar tu sitio después de hacer cambios:
```bash
# Conectarte al servidor
ssh root@31.97.185.124

# Ejecutar script de actualización
curl -sSL https://raw.githubusercontent.com/nicolasfarchica/nf-agent-glow/main/update-site.sh | bash
```

## 🛠️ Comandos Útiles

### Verificar estado del sitio
```bash
# Ver si Nginx está corriendo
systemctl status nginx

# Probar el sitio localmente
curl -I http://localhost

# Ver logs en tiempo real
tail -f /var/log/nginx/nfagent.ai_error.log
```

### Gestión de archivos
```bash
# Ir al directorio del proyecto
cd /var/www/nf-agent-glow

# Ver archivos generados
ls -la dist/

# Reiniciar Nginx manualmente
systemctl restart nginx
```

### SSL/HTTPS
```bash
# Renovar certificado SSL
certbot renew

# Verificar certificado
certbot certificates
```

## 🔍 Troubleshooting

### Si el sitio no carga:
1. Verificar DNS: `nslookup nfagent.ai`
2. Verificar Nginx: `nginx -t`
3. Ver logs: `tail -f /var/log/nginx/error.log`

### Si hay errores de permisos:
```bash
# Ajustar permisos
chown -R www-data:www-data /var/www/nf-agent-glow/dist
chmod -R 755 /var/www/nf-agent-glow/dist
```

### Si el build falla:
```bash
cd /var/www/nf-agent-glow
npm install --force
npm run build
```

## 📁 Estructura de Archivos

```
/var/www/nf-agent-glow/
├── dist/                 # Archivos del sitio web
├── src/                  # Código fuente
├── package.json          # Dependencias
└── vite.config.ts        # Configuración de build
```

## 🌐 URLs de Acceso

- **Desarrollo local:** http://localhost:5173 (con `npm run dev`)
- **Producción:** https://nfagent.ai
- **Con www:** https://www.nfagent.ai

## 📞 Información de Contacto

- **Repositorio:** https://github.com/nicolasfarchica/nf-agent-glow
- **Panel VPS:** https://hpanel.hostinger.com/vps/885306/overview

## ⚡ Scripts Automatizados

| Script | Propósito | Uso |
|--------|-----------|-----|
| `deploy-vps.sh` | Deployment inicial completo | Primera instalación |
| `update-site.sh` | Actualización rápida | Actualizaciones futuras |

¡Tu sitio estará disponible en https://nfagent.ai una vez completado el deployment! 🎉
