# Odonto_Edit (versión estática / listo para GitHub Pages)

Estructura del proyecto ya incluida. Reemplaza imágenes dentro de `/assets/` con las tuyas.

## Instrucciones rápidas (VSCode → GitHub)
1. `git init` (si no está inicializado)
2. `git add .`
3. `git commit -m "Site inicial - versión estática"`
4. `git branch -M main`
5. `git remote add origin <URL-del-repo>`
6. `git push -u origin main`

## Publicar en GitHub Pages
- En el repo GitHub → Settings → Pages → Branch: `main` / `root` → Save.
- GitHub generará la página y te dará URL `https://<usuario>.github.io/<repo>/`
- Si quieres dominio personalizado: configura CNAME y registros DNS (te puedo guiar).

## Notas
- El formulario es demo. Para enviar emails/integrar backend, conecta a un endpoint o a un servicio (Formspree, Netlify Forms, o tu API).
- Reemplaza `assets/*.jpg` por tus imágenes reales y comprueba tamaños.
