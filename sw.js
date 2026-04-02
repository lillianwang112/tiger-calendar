const CACHE_NAME = 'tigercal-v5';
const STATIC_ASSETS = [
  '/manifest.json',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-180x180.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/icons/icon-772x772.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      const old = keys.filter(k => k !== CACHE_NAME);
      const wasUpdate = old.length > 0;
      return Promise.all(old.map(k => caches.delete(k))).then(() => {
        // Only reload clients when replacing an existing version, not on first install
        if (wasUpdate) {
          return self.clients.matchAll({type:'window'}).then(clients => {
            clients.forEach(client => client.postMessage({type:'SW_UPDATED'}));
          });
        }
      });
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network-first for HTML navigation — always serve fresh HTML
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => caches.match('/index.html')));
    return;
  }
  // Cache-first with network fallback for other assets
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => null);
    })
  );
});
