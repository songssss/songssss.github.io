var dataCacheName = 'pwaData-v1';
var cacheName = 'pwa-final-1';
var filesToCache = [
  './',
  './index.html',
  './scripts/app.js'
];

//install
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});



//fetch
self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);

  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);
        return response;
      }
      console.log('No response found in cache from network...');

      return fetch(e.request).then(function(response) {
        console.log('Response from network is: Fetch', response);
        return response;
      });
    })
  );
});



//activate
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  return self.clients.claim();
});