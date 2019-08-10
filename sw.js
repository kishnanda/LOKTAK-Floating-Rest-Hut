const cacheName = 'v2';

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
   //remove unwanted caches
   e.waitUntill(
    caches.key().then(cacheNames => {
     return Promise.all(
      cachesNames.map(cache => {
       if(cache !== cacheName) {
        console.log('Service Worker: Clearing Old Cache');
          return caches.delete(cache);
       }
      })
     )
    })
   );   
});

