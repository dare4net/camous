const CACHE_NAME = 'camous-v1';
const urlsToCache = [
  '/',
  '/manifest.webmanifest',
  '/Camous-icon.png',
  '/product/airpods-6010254_1280.jpg',
  '/product/nike-5041718_1280.jpg',
  '/product/nike-5644799_1280.jpg',
  '/product/shoe-2498994_1280.jpg',
  '/product/t-shirt-1710578_1280.jpg'
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});



