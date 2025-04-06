// install event handler
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static').then(cache => {
      return cache.addAll([
        '/favicon-16x16.png',
        '/favicon-32x32.png',
        '/icon-192x192.png',
        '/icon-256x256.png',
        '/icon-384x384.png',
        '/icon-512x512.png',
        '/manifest.json',
      ]);
    })
  );
  console.log('Install');
  self.skipWaiting();
});

// retrieve assets from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});