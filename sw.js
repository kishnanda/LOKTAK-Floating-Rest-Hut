importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cache-polyfill.js').then(function(cache) {
     return cache.addAll([
       '/',
       'index.html',
       'img/ABOUTHUT.png',
      'img/headerSlider1.jpeg',
      'img/headerSlider1.jpeg.jpg',
      'img/headerSlider2.jpeg.jpg',
       'js/smooth-scroll.js',
       'style.css',
       'index.html',
     
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
