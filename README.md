# DATALAP — sitio web (datalap.com)

Sitio estático servido por **GitHub Pages** desde la rama `prd`. Dominio apex `datalap.com` (archivo `CNAME`); GitHub redirige `www` → apex automáticamente.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Home. JSON-LD `@graph` (LocalBusiness, WebSite, WebPage, Service, FAQPage), metas y formulario → WhatsApp. |
| `aviso-de-privacidad.html` | Aviso de privacidad LFPDPPP (sin razón social ni domicilio por decisión del dueño). |
| `404.html` | Página de error que GitHub Pages sirve automáticamente; enlaza a las páginas principales. |
| `<carpeta>/index.html` | Páginas internas con URL limpia (`/carpeta/`). Ver tabla siguiente. |
| `assets/styles.css` | **CSS compilado** por Tailwind CLI (purgado + minificado). No editar a mano. |
| `assets/og-datalap.jpg` | Imagen Open Graph 1200×630 (placeholder generado; reemplazar por diseño real). |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Iconos. |
| `src/input.css` | Fuente del CSS (directivas Tailwind + estilos propios). |
| `tailwind.config.js` | Paleta de marca, fuentes, animaciones y rutas a purgar. |
| `robots.txt`, `sitemap.xml`, `CNAME` | SEO técnico / dominio. |

### Páginas internas (seo-v4)

Cada carpeta contiene un `index.html` completo con: title ≤ 60, meta description ≤ 155, canonical, OG/Twitter (misma imagen `assets/og-datalap.jpg`), JSON-LD propio (`WebPage` + `BreadcrumbList` + `Service` y/o `FAQPage`), H1 con keyword, breadcrumb visible, bloque "Cómo funciona", bloque "Atención 24/7 y reemplazo en 24 h", FAQ con `<details>`, formulario → WhatsApp y enlaces internos. **Nav, footer y `<script>` son idénticos en todas las páginas y en la home**: si cambias uno, replica el cambio en los 12 archivos.

| URL | Rol |
|---|---|
| `/renta-de-laptops-monterrey/` | Página pilar comercial ("renta de laptops Monterrey", "renta de computadoras para empresas Monterrey"). |
| `/arrendamiento-de-equipo-de-computo-empresas/` | Enfoque fiscal/financiero (OPEX vs CAPEX, deducibilidad ISR, arrendamiento puro vs financiero). |
| `/renta-de-laptops-por-mes/` | Flexibilidad: por mes, sin plazo forzoso, escalar arriba/abajo. |
| `/renta-de-laptops-para-proyectos-y-eventos/` | Proyectos temporales, capacitaciones, auditorías, eventos. |
| `/atencion-24-7-y-reemplazo-en-24-horas/` | Diferenciador: ticket inmediato, diagnóstico de entorno, reemplazo en 24 h. |
| `/preguntas-frecuentes/` | 20 FAQs agrupadas + `FAQPage`. |
| `/renta-de-laptops-san-pedro-garza-garcia/`, `/renta-de-laptops-apodaca/`, `/renta-de-laptops-guadalupe/`, `/renta-de-laptops-santa-catarina/`, `/renta-de-laptops-san-nicolas-de-los-garza/` | Páginas por municipio con zonas/parques reales y logística propia. |

Reglas editoriales que viven en el contenido (decisión del dueño): **nunca publicar precios ni rangos** (el CTA es siempre "Solicita tu cotización"); horario comercial L–V 9:00–18:00; atención a usuarios con equipo asignado 24/7 con reemplazo en 24 h; sin razón social, domicilio ni nombres de personas; un solo número (81 2619 4101).

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
# abrir http://localhost:8080/ (las URLs limpias /carpeta/ funcionan igual que en GitHub Pages)
```

## Decisiones que viven en el código

- **Número de WhatsApp**: una sola constante `WHATSAPP_NUMBER` al inicio del `<script>` (idéntico en `index.html` y en cada `*/index.html`); se propaga a todos los enlaces `a.js-wa-link` / `a.js-tel-link`. El JSON-LD de la home y el `404.html` tienen el mismo número escrito: si se cambia, buscar y reemplazar `528126194101` en todo el repo.
- **Formulario en páginas internas**: el mismo formulario de la home; el atributo `data-intro` del `<form>` define la primera línea del mensaje de WhatsApp (p. ej. "Quiero cotizar renta de laptops en Apodaca").
- **Purga de Tailwind**: `tailwind.config.js` → `content: ['./*.html', './*/index.html']`. Si creas una página en otra profundidad, añade su glob.
- **GA4**: snippet comentado en `<head>` de `index.html`; sustituir `G-XXXXXXX`. El evento de conversión `generate_lead` ya se dispara al enviar el formulario / clic en WhatsApp o teléfono (no falla si `gtag` no existe).
- **Search Console**: se recomienda verificar por DNS TXT (propiedad de dominio). Hay meta comentada como alternativa.
