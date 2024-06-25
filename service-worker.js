// service-worker.js
const cacheName = 'SuperEats-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  './assets/css/common.css',
  './assets/js/assetswap.js',
  './assets/js/cart.js',
  './assets/js/data.js',
  './assets/js/main.js',
  './assets/js/meals.js',
  './assets/js/mealsTab.js',
  './assets/js/news.js',
  './assets/js/tabs.js',
  './assets/images/company/flammyTechLogo.png',
  './assets/images/icons/cart.png',
  './assets/images/icons/run.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
