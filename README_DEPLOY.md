# DATÓMICO — sitio inicial

Sitio estático listo para Vercel. No requiere Node, WordPress ni base de datos.

## Vista local
Abre `index.html` directamente en el navegador.

## Publicar en Vercel
1. Entra a Vercel y crea un proyecto nuevo.
2. Sube esta carpeta (o súbela primero a GitHub y conecta el repositorio).
3. Framework Preset: **Other**.
4. Build Command: déjalo vacío.
5. Output Directory: déjalo vacío.
6. Deploy.

## Conectar `datomicotv.com`
En Vercel: Project → Settings → Domains → agrega:
- `datomicotv.com`
- `www.datomicotv.com`

Vercel mostrará los DNS exactos que debes configurar donde compraste el dominio. Usa esos valores, porque pueden variar.

## Antes de publicar definitivamente
- Sustituir `assets/datomico-logo.png` por el archivo maestro del logo si tienes una versión PNG/SVG de mayor resolución.
- Cambiar los enlaces de Facebook y YouTube por las URLs exactas de DATÓMICO.
- La cifra “45K+” está escrita manualmente en `index.html`; puede cambiarse o retirarse para que no quede desactualizada.

## Siguiente fase sugerida
Crear `/expedientes/` con fichas de Shanay‑Timpishka, Byford Dolphin, Pata de Elefante y Goiânia, incluyendo fuentes y notas sobre recreaciones visuales.

V2 deployment initialized.
