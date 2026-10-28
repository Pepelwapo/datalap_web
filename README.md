# DATALAP — sitio web (datalap.com)

Sitio estático servido por **GitHub Pages** desde la rama `prd`. Dominio apex `datalap.com` (archivo `CNAME`); GitHub redirige `www` → apex automáticamente.

## Reglas editoriales (decisión del dueño, obligatorias)

- **Palabra prohibida: «s‑o‑p‑o‑r‑t‑e»** (escrita aquí con guiones para que este README también pase el grep; tampoco el verbo «s‑o‑p‑o‑r‑t‑a»). DATALAP no es eso ni lo hace. El vocabulario correcto es el del brochure: **acompañamiento**, **atención a usuarios**, **mantenimiento**, **reemplazo express**. Antes de commitear: `grep -riE "s[o]port" --include=*.html --include=*.md --include=*.xml .` (sin `node_modules`) debe dar 0.
- **Alcance real del servicio** (redáctalo así en todas las páginas):
  1. **Cero fricción operativa, día 1:** cada equipo se entrega con imagen corporativa precargada, perfiles de acceso configurados, blindaje BitLocker y gestión de activos desde el primer inicio de sesión. El **entorno crítico** llega listo: librerías, variables de entorno, conectores ODBC, SQL y accesos funcionando. SQL/ODBC/accesos se mencionan **sólo** dentro de esta puesta en marcha.
  2. **Acompañamiento Hardware & Entorno, en línea:** salud del **hardware y del sistema operativo**, directo con el usuario que tiene el equipo asignado (WhatsApp, llamada o sesión remota). **Frase estándar obligatoria** (puede variar mínimamente la redacción, no el contenido): *"Si el sistema operativo falla, lo corregimos en línea. Si no se puede corregir, sea del sistema operativo o del hardware, dentro de las próximas 24 horas te entregamos el equipo de reemplazo. Todo desde el primer contacto, en línea."* Nadie se desplaza por una falla; a las instalaciones del cliente sólo se va a entregar, recoger o reemplazar equipos. **No se explica la disponibilidad** en la web: nada de "2‑4‑/‑7", "a cualquier h‑o‑r‑a", horarios de atención, m‑a‑d‑r‑u‑g‑a‑d‑a‑s, fines de semana ni turnos; tampoco "t‑i‑c‑k‑e‑t", "en c‑a‑m‑i‑n‑o", "i‑n‑m‑e‑d‑i‑a‑t‑o" ni "p‑u‑e‑n‑t‑e técnico" (escritos aquí con guiones para que este README pase el grep). No repetir "24 horas" dos veces en el mismo párrafo.
  3. **Mantenimiento y Reemplazo Express:** mantenimiento preventivo programado y, si la falla no se puede corregir en línea, **equipo de reemplazo dentro de las próximas 24 horas** (stock de seguridad, logística local en el área metropolitana de Monterrey).
  4. **Lo que NO se hace** (dilo con claridad y respeto): no se atiende software de negocio, aplicaciones del cliente ni la operación diaria del usuario. Frase de marca: *"Tu software y tu operación son tuyos; el equipo es nuestro: si el sistema operativo o el hardware fallan, entramos nosotros."* / *"Resolvemos el hardware, preservamos tu operación."*
- **Voz de marca = brochure** (`Datalap - Brochure.pdf`): eslogan "Tu proyecto marca los tiempos, no un contrato."; lema "Nosotros ponemos la tecnología y el riesgo; tú pones el talento y el crecimiento."; pilares financieros "Blindaje de liquidez", "Sin plazos forzosos", "100 % deducible OPEX", "Sin desembolso inicial (sin depósitos, sin rentas anticipadas y sin letras chiquitas)"; pilares operativos "Cero fricción operativa", "Acompañamiento Hardware & Entorno", "Renovación continua". En web se usa siempre **"tú"** (el brochure mezcla tú/usted).
- **Nunca publicar cifras de renta ni rangos** (ni "$", ni "desde"); el CTA es siempre "Solicita tu cotización".
- Horario comercial **L–V 9:00–18:00** (único horario que se publica; el footer interno dice sólo "Lunes a viernes, 9:00–18:00"). En metas y títulos la fórmula es "acompañamiento en línea y reemplazo en 24 h".
- Sin razón social, domicilio ni nombres de personas. Un solo contacto: **81 2619 4101** (`WHATSAPP_NUMBER = "528126194101"`) y **contacto@datalap.com**.
- No inventar modelos exactos: "tipo Dell Latitude / Lenovo ThinkPad / HP EliteBook".
- **La home es la original del dueño** (commit `af05d42`: hero "Tu proyecto marca los tiempos, no un contrato.", su copy y su diseño). Sólo se le aplican cambios **invisibles** de SEO (JSON-LD, metas, favicons, canonical, número único) más la fila de enlaces del footer. **Conserva Tailwind por CDN en la home**; no la migres al CSS compilado.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Home original (Tailwind por CDN + Font Awesome). JSON-LD `@graph` en `<head>` (LocalBusiness `#business` con nombre alternativo y logo, WebSite `#website` con nombre alternativo, WebPage, Service), metas OG/Twitter y formulario → WhatsApp. Única adición visible: enlaces "Servicios" / "Zonas" en el footer y enlace al aviso de privacidad. |
| `aviso-de-privacidad.html` | Aviso de privacidad LFPDPPP (sin razón social ni domicilio por decisión del dueño). |
| `404.html` | Página de error que GitHub Pages sirve automáticamente; enlaza a las páginas principales. |
| `<carpeta>/index.html` | Páginas internas con URL limpia (`/carpeta/`). Ver tabla siguiente. |
| `assets/styles.css` | **CSS compilado** por Tailwind CLI (purgado + minificado) para las páginas internas y el 404. No editar a mano. |
| `assets/og-datalap.jpg` | Imagen Open Graph 1200×630 (placeholder generado; reemplazar por diseño real). |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Iconos. |
| `src/input.css` | Fuente del CSS (directivas Tailwind + estilos propios). |
| `tailwind.config.js` | Paleta de marca, fuentes, animaciones y rutas a purgar. |
| `robots.txt`, `sitemap.xml`, `CNAME` | SEO técnico / dominio. |

### Páginas internas (seo-v4)

Cada carpeta contiene un `index.html` completo con: title ≤ 60, meta description ≤ 155, canonical, OG/Twitter (misma imagen `assets/og-datalap.jpg`), JSON-LD propio (`WebPage` + `BreadcrumbList` + `Service` y/o `FAQPage`), H1 con keyword, breadcrumb visible, bloque "Cómo funciona", bloque compartido **"Acompañamiento Hardware & Entorno + Reemplazo Express"** (con la tarjeta "Qué sí y qué no"), FAQ con `<details>`, formulario → WhatsApp y enlaces internos. **Nav, footer y `<script>` son idénticos en las 11 páginas internas**: si cambias uno, replica el cambio en las 11. El nav interno tiene el dropdown "Servicios"; el logo e "Inicio" llevan a `/`. Los enlaces a secciones de la home usan sólo anclas que existen en la home original (`/#arrendamiento`, `/#evolucion`, `/#comparativa`, `/#contacto`); "Equipos", "Cómo funciona" y "Zonas" apuntan a la página pilar (`/renta-de-laptops-monterrey/#equipos`, `#como-funciona`, `#zonas`).

| URL | Rol |
|---|---|
| `/renta-de-laptops-monterrey/` | Página pilar comercial ("renta de laptops Monterrey", "renta de computadoras para empresas Monterrey"). |
| `/arrendamiento-de-equipo-de-computo-empresas/` | Intención de búsqueda “leasing de laptops” y enfoque fiscal/financiero (OPEX vs CAPEX, deducibilidad ISR, arrendamiento puro vs financiero), aclarando que DATALAP ofrece arrendamiento puro operativo y no compra financiada. |
| `/renta-de-laptops-por-mes/` | Flexibilidad: por mes, sin plazo forzoso, escalar arriba/abajo. |
| `/renta-de-laptops-para-proyectos-y-eventos/` | Consultorías, proyectos temporales, capacitaciones, auditorías y eventos; cubre la frase natural “laptops de renta para consultorías”. |
| `/atencion-24-7-y-reemplazo-en-24-horas/` | Diferenciador: acompañamiento hardware & entorno en línea, "Qué sí / Qué no", proceso en 3 pasos (nos escribes o llamas → revisamos en línea → reemplazo en 24 h si no se corrige), mantenimiento y reemplazo express. (El slug se conserva; el H1 usa la voz del brochure.) |
| `/preguntas-frecuentes/` | 20 FAQs agrupadas + `FAQPage`. |
| `/renta-de-laptops-san-pedro-garza-garcia/`, `/renta-de-laptops-apodaca/`, `/renta-de-laptops-guadalupe/`, `/renta-de-laptops-santa-catarina/`, `/renta-de-laptops-san-nicolas-de-los-garza/` | Páginas por municipio con zonas/parques reales y logística propia. |

## Build del CSS (obligatorio tras tocar clases en los HTML internos)

Requiere Node 18+ (probado con Node 24).

```bash
npm install          # una sola vez (instala tailwindcss 3.4 como devDependency)
npm run build        # genera assets/styles.css minificado
npm run watch        # modo desarrollo: recompila al guardar
```

Si agregas una clase de Tailwind nueva en un HTML interno y no corres `npm run build`, la clase **no existirá** en producción (el CSS está purgado). Commitea siempre `assets/styles.css` junto con el HTML. La home no depende de este build (usa el CDN).

## Vista previa local

```bash
python -m http.server 8096
# abrir http://127.0.0.1:8096/ (las URLs limpias /carpeta/ funcionan igual que en GitHub Pages)
```

## Validaciones antes de commitear

```bash
grep -riE "s[o]port" --include=*.html --include=*.md --include=*.xml . | grep -v node_modules   # → 0 resultados
grep -rniE "24[/]7|las 24 [h]oras los|a cualquier [h]ora|horario [h]ábil|hora [p]rudente|madrug[a]da|en [c]amino|tick[e]t|inmedia[t]|puen[t]e|acudi[m]os" --include=*.html --include=*.md . | grep -v node_modules   # → 0 resultados
grep -rnE '\$[0-9]|desde \$|pre[c]io' --include=*.html --include=*.md .                         # → 0 resultados
```

Además: parse de los 14 HTML sin errores, JSON-LD válido, 1 H1 por página, todos los `href="/..."` resuelven a archivos existentes y `sitemap.xml` (13 URLs) coincide con las carpetas.

## Decisiones que viven en el código

- **Número de WhatsApp**: una sola constante `WHATSAPP_NUMBER` al inicio del `<script>` (idéntica en `index.html` y en cada `*/index.html`). En las páginas internas se propaga a todos los enlaces `a.js-wa-link` / `a.js-tel-link`; en la home la usa el formulario. El JSON-LD de la home y el `404.html` tienen el mismo número escrito: si se cambia, buscar y reemplazar `528126194101` en todo el repo.
- **Formulario en páginas internas**: el mismo formulario de la home; el atributo `data-intro` del `<form>` define la primera línea del mensaje de WhatsApp (p. ej. "Quiero cotizar renta de laptops en Apodaca").
- **Purga de Tailwind**: `tailwind.config.js` → `content: ['./*.html', './*/index.html']`. Si creas una página en otra profundidad, añade su glob.
- **GA4**: no hay snippet activo. El evento de conversión `generate_lead` ya se dispara en las páginas internas al enviar el formulario / clic en WhatsApp o teléfono (no falla si `gtag` no existe).
- **Search Console**: se recomienda verificar por DNS TXT (propiedad de dominio).
