# Guía de Deployment para GoHighLevel

## 🚀 Preparación Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/nicolasfarchica/nf-agent-glow.git
cd nf-agent-glow
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Construir para producción
```bash
# Opción A: Usar el script automatizado
chmod +x deploy-ghl.sh
./deploy-ghl.sh

# Opción B: Manualmente
npm run build
```

## 📁 Archivos generados

Después del build, tendrás:
```
dist/
├── index.html          # Página principal
├── assets/
│   ├── index-[hash].js  # JavaScript principal
│   ├── index-[hash].css # Estilos CSS
│   └── [otros assets]   # Imágenes, fuentes, etc.
```

## 🔧 Integración en GoHighLevel

### Método 1: Subida de Archivos (Recomendado)

1. **Acceder a GoHighLevel**
   - Ve a tu dashboard de GoHighLevel
   - Navega a `Sites` → `Websites` o `Funnels`

2. **Crear nueva página**
   - Haz clic en "Add New" → "Website" o "Funnel"
   - Selecciona "Blank Page" o "Custom HTML"

3. **Subir archivos**
   - Ve a la sección de "File Manager" o "Media"
   - Sube todos los archivos de la carpeta `dist/`
   - Mantén la estructura de carpetas (especialmente `assets/`)

4. **Configurar página principal**
   - En el editor de páginas, selecciona "Custom Code"
   - Copia y pega el contenido de `dist/index.html`
   - Asegúrate de que las rutas a los assets sean correctas

### Método 2: CDN/Hosting Externo

1. **Subir a un CDN**
   - Netlify: arrastra la carpeta `dist/` a Netlify
   - Vercel: conecta tu repositorio de GitHub
   - AWS S3: sube los archivos con bucket público

2. **Configurar en GoHighLevel**
   - Usa iframe o custom code para incluir tu URL
   ```html
   <iframe src="https://tu-url-cdn.com" 
           width="100%" 
           height="100vh" 
           frameborder="0">
   </iframe>
   ```

## ⚙️ Configuraciones Importantes

### Headers requeridos (si usas hosting externo)
```
Content-Type: text/html; charset=utf-8
X-Frame-Options: ALLOWALL
Access-Control-Allow-Origin: *.gohighlevel.com
```

### Variables de entorno en GoHighLevel
Si tu app usa variables de entorno, configúralas en GoHighLevel:
- Ve a Settings → Custom Values
- Agrega las variables necesarias

## 🔍 Troubleshooting

### Problema: Assets no cargan
**Solución:** Verifica que las rutas sean relativas (`./assets/`) no absolutas (`/assets/`)

### Problema: Estilos no se aplican
**Solución:** Asegúrate de que el CSS esté inlineado o correctamente referenciado

### Problema: JavaScript no funciona
**Solución:** Revisa la consola del navegador, puede ser un problema de CORS

## 📋 Checklist de Deployment

- [ ] Build completado sin errores
- [ ] Archivos subidos a GoHighLevel
- [ ] Página principal configurada
- [ ] Assets cargando correctamente
- [ ] Funcionalidad probada en diferentes navegadores
- [ ] Responsive design verificado
- [ ] Performance optimizado

## 🔄 Actualizaciones

Para futuras actualizaciones:
1. Haz cambios en tu código
2. Ejecuta `npm run build`
3. Reemplaza los archivos en GoHighLevel
4. Limpia caché si es necesario

## 📞 Soporte

Si encuentras problemas:
1. Revisa los logs de GoHighLevel
2. Verifica la consola del navegador
3. Comprueba que todas las rutas sean correctas
4. Contacta al soporte de GoHighLevel si es necesario
