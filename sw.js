importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
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
