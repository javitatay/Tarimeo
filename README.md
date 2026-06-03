<div align="center">

<img src="banner.png" alt="Tarimeo" width="100%">

# Tarimeo

**Diseña y organiza la distribución de tarimas y escenarios de tu festival.**

Una herramienta visual, rápida y sin complicaciones para planificar el montaje de tarimas modulares por días y escenarios. Funciona sin conexión.

[![Instalar Tarimeo](https://img.shields.io/badge/📲_Instalar_Tarimeo-c89838?style=for-the-badge)](https://javitatay.github.io/Tarimeo/)
[![Descargar APK](https://img.shields.io/badge/⬇️_Descargar_APK_(Android)-141210?style=for-the-badge)](https://github.com/javitatay/Tarimeo/releases/latest)

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
- 🔍 **Buscador visual** — filtra bloques y artistas en tiempo real; el resto del plano se atenúa para que solo veas lo que buscas.
- ↩️ **Deshacer y rehacer** — historial de hasta 30 pasos (Ctrl+Z / Ctrl+Y).
- 🪜 **Extras de seguridad** — marca faldón, ruedas, escalera y barandilla por bloque. A partir de 60 cm de altura, la app sugiere escalera y barandilla automáticamente según normativa.
- 📱 **Optimizado para móvil** — pan táctil y zoom con pellizco sobre el plano sin interferir con el dibujo de bloques.
- 🌙 **Modo claro y oscuro** y **bilingüe** (español / inglés).
- 📴 **Funciona sin conexión**, ideal para usar durante el montaje en el recinto.

---

## 📲 Cómo instalar Tarimeo (recomendado)

La forma más sencilla y con mejor experiencia es instalarla directamente desde el navegador. Se ve **a pantalla completa, como una app normal**, y se actualiza sola.

**En Android (Chrome):**
1. Abre **[javitatay.github.io/Tarimeo](https://javitatay.github.io/Tarimeo/)** en Chrome.
2. Toca el menú de los tres puntos (arriba a la derecha).
3. Pulsa **"Añadir a pantalla de inicio"** (o "Instalar aplicación").
4. Confirma. El icono de Tarimeo aparecerá entre tus apps.

**En iPhone / iPad (Safari):**
1. Abre **[javitatay.github.io/Tarimeo](https://javitatay.github.io/Tarimeo/)** en Safari.
2. Toca el botón de **compartir** (el cuadrado con la flecha).
3. Pulsa **"Añadir a pantalla de inicio"**.

Al abrirla desde el icono funciona como una app: pantalla completa, sin barra de navegador y disponible sin conexión.

---

## ⬇️ Alternativa: instalar el APK (Android)

Si prefieres un archivo instalable, también hay un APK disponible:

1. Ve a la sección **[Releases](https://github.com/javitatay/Tarimeo/releases/latest)** y descarga **`Tarimeo.apk`** en tu móvil.
2. Ábrelo. Android avisará de que procede de un "origen desconocido": es normal en apps que no vienen de Google Play. Concede el permiso para instalar.
3. Tarimeo aparecerá en tu lista de apps.

> Nota: instalado por esta vía, es posible que la app muestre una pequeña barra de navegador en la parte superior. Si prefieres la experiencia a pantalla completa, usa el método recomendado de arriba (instalar desde el navegador).

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

Tarimeo se distribuye bajo la licencia **[GNU General Public License v3.0](LICENSE)**.

Eres libre de usar, estudiar, modificar y compartir este software. La única condición importante es que, si distribuyes una versión modificada, debe mantenerse también como código abierto bajo esta misma licencia, para que las mejoras sigan estando disponibles para todos.

[![Licencia: GPL v3](https://img.shields.io/badge/Licencia-GPLv3-c89838?style=flat-square)](LICENSE)

---

<div align="center">
<sub>Hecho para producción de eventos · Tarimeo</sub>
</div>
