/* Service Worker de Tarimeo
   Hace que la app sea instalable y funcione sin conexión.
   Como la app es un único index.html autocontenido, basta con cachear
   ese archivo, el manifest y los iconos. */

const CACHE = 'tarimeo-v2';

// Archivos propios de la app que queremos disponibles offline.
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png'
];

// Al instalar: precargamos los archivos propios.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Al activar: limpiamos versiones antiguas de la caché.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Al pedir un recurso:
//  - Navegaciones (abrir la app): intentamos red y si falla servimos el index cacheado.
//  - Recursos propios: cache primero, y si no está, red (y lo guardamos).
//  - Resto (p. ej. fuentes de Google): red primero, con caché de respaldo.
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // Guardamos en caché copias de recursos GET válidos del mismo origen.
        if (req.method === 'GET' && res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
