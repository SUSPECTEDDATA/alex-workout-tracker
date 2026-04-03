// Minimal service worker for Cloudflare Pages
const CACHE = 'workout-v3';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => 
      cache.addAll([
        'index.html',
        'history.html',
        'progress.html',
        'plan.html',
        'manifest.json'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
