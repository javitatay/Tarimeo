<div align="center">

<img src="banner.png" alt="Tarimeo" width="100%">

# Tarimeo

**Diseña y organiza la distribución de tarimas y escenarios de tu festival.**

Una herramienta visual, rápida y sin complicaciones para planificar el montaje de tarimas modulares por días y escenarios. Funciona sin conexión.

[![Descargar APK](https://img.shields.io/badge/⬇️_Descargar_app_Android-APK-c89838?style=for-the-badge)](https://github.com/javitatay/Tarimeo/releases/latest)
[![Abrir en el navegador](https://img.shields.io/badge/🌐_Abrir_en_el_navegador-141210?style=for-the-badge)](https://javitatay.github.io/Tarimeo/)

</div>

---

## ¿Qué es Tarimeo?

Tarimeo te ayuda a planificar dónde va cada tarima sobre el plano de un escenario, organizar el montaje por días y por escenarios, controlar cuántos módulos tienes disponibles y compartir el plano con tu equipo en segundos. Todo se guarda en tu dispositivo: **no necesita internet ni crear ninguna cuenta**.

### Funciones principales

- 🎪 **Plano por escenarios** — coloca los bloques sobre una cuadrícula arrastrándolos con el dedo o el ratón.
- 📅 **Varios días** — planifica cada jornada del evento de forma independiente.
- 🎸 **Asignación a artistas** — visualiza de un vistazo quién ocupa qué, con código de color.
- 📦 **Control de stock** — sabe en todo momento cuántos módulos usas y cuántos te quedan.
- 🖨️ **Exporta y comparte** — genera planos para imprimir o PDF, exporta a CSV, guarda imágenes y crea copias de seguridad.
- 🌙 **Modo claro y oscuro** y **bilingüe** (español / inglés).
- 📴 **Funciona sin conexión**, ideal para usar durante el montaje en el recinto.

---

## 📲 Cómo instalar la app en Android

1. Pulsa el botón **⬇️ Descargar app Android** de arriba (o ve a la sección **[Releases](https://github.com/javitatay/Tarimeo/releases/latest)**).
2. Descarga el archivo **`Tarimeo.apk`** en tu móvil.
3. Ábrelo. Android te avisará de que procede de un "origen desconocido": es normal en apps que no vienen de Google Play. Concede el permiso para instalar.
4. ¡Listo! Tarimeo aparecerá en tu lista de apps con su icono.

> **¿Por qué el aviso de "origen desconocido"?** Simplemente porque la app no se distribuye a través de Google Play, sino directamente desde aquí. El aviso es un paso de seguridad estándar de Android, no indica ningún problema.

---

## 🌐 Usar sin instalar nada

Si prefieres no instalar la app, puedes usar Tarimeo directamente en el navegador:

👉 **[javitatay.github.io/Tarimeo](https://javitatay.github.io/Tarimeo/)**

Funciona igual en móvil y en ordenador. Desde el navegador del móvil, además, puedes usar la opción **"Añadir a la pantalla de inicio"** para tenerla como si fuera una app.

---

## 💾 Tus datos

Toda la información que introduces (festivales, artistas, bloques, distribuciones) se guarda **únicamente en tu dispositivo**. No se envía a ningún servidor ni se comparte con nadie. Si cambias de móvil o quieres llevarte los datos, usa la opción de **copia de seguridad** dentro de la app para exportar e importar un archivo.

---

## 🛠️ Para desarrolladores

Tarimeo es una aplicación web autocontenida en un único archivo `index.html`, sin dependencias externas ni framework. Se sirve como [PWA](https://web.dev/progressive-web-apps/) mediante GitHub Pages y se empaqueta para Android con [PWABuilder](https://www.pwabuilder.com/).

```
index.html              · toda la app (estructura, estilos y lógica)
manifest.webmanifest    · metadatos de la PWA
sw.js                   · service worker (instalable + offline)
icons/                  · iconos de la app
```

Para probarlo en local basta con servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8080
# y abrir http://localhost:8080
```

---

## 📄 Licencia

Indica aquí la licencia que prefieras (por ejemplo MIT). Si no añades ninguna, por defecto se consideran todos los derechos reservados.

---

<div align="center">
<sub>Hecho para producción de eventos · Tarimeo</sub>
</div>
