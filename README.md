# DATALAP — sitio web (datalap.com)

Sitio estático servido por **GitHub Pages** desde la rama `prd`. Dominio apex `datalap.com` (archivo `CNAME`); GitHub redirige `www` → apex automáticamente.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Home (única landing). JSON-LD, metas y formulario → WhatsApp. |
| `aviso-de-privacidad.html` | Aviso de privacidad LFPDPPP (sustituir `[RAZÓN SOCIAL]`, `[DOMICILIO]`, `[CORREO]`). |
| `404.html` | Página de error que GitHub Pages sirve automáticamente. |
| `assets/styles.css` | **CSS compilado** por Tailwind CLI (purgado + minificado). No editar a mano. |
| `assets/og-datalap.jpg` | Imagen Open Graph 1200×630 (placeholder generado; reemplazar por diseño real). |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Iconos. |
| `src/input.css` | Fuente del CSS (directivas Tailwind + estilos propios). |
| `tailwind.config.js` | Paleta de marca, fuentes, animaciones y rutas a purgar. |
| `robots.txt`, `sitemap.xml`, `CNAME` | SEO técnico / dominio. |

## Build del CSS (obligatorio tras tocar clases en los HTML)

Requiere Node 18+ (probado con Node 24).

```bash
npm install          # una sola vez (instala tailwindcss 3.4 como devDependency)
npm run build        # genera assets/styles.css minificado
npm run watch        # modo desarrollo: recompila al guardar
```

Si agregas una clase de Tailwind nueva en un HTML y no corres `npm run build`, la clase **no existirá** en producción (el CSS está purgado). Commitea siempre `assets/styles.css` junto con el HTML.

## Vista previa local

```bash
python -m http.server 8080
# abrir http://localhost:8080/
```

## Decisiones que viven en el código

- **Número de WhatsApp**: una sola constante `WHATSAPP_NUMBER` al inicio del `<script>` de `index.html`; se propaga a todos los enlaces `a.js-wa-link` / `a.js-tel-link`. El JSON-LD y el `404.html` tienen el mismo número escrito: si se cambia, cambiar en los tres lugares.
- **GA4**: snippet comentado en `<head>` de `index.html`; sustituir `G-XXXXXXX`. El evento de conversión `generate_lead` ya se dispara al enviar el formulario / clic en WhatsApp o teléfono (no falla si `gtag` no existe).
- **Search Console**: se recomienda verificar por DNS TXT (propiedad de dominio). Hay meta comentada como alternativa.
