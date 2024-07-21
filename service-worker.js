const CACHE_NAME = 'workout-tracker-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/workout.html',
  '/progress.html',
  '/styles.css',
  // Add any other files you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});