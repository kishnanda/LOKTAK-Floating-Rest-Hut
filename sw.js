const cacheName = 'v1';

const cacheAssets = [
'index.html',
   'style.css',
   '/js/smooth-scroll.js',
   '/img',
];

self.addEventListener('install', e => {
   console.log("Service Worker: Installed");
   e.waitUntil(
   caches
      .open(cacheName)
      .then(cache => {
       console.log('Service worker: Caching Files');
         cahce.addAll(cacheAssets);
      })
      .then(()  => self.skipwaiting())
   );
});

self.addEventListener('activate', e => {
   console.log("Service Worker: Activated");
});
