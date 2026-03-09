const CACHE = 'nto-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/objects/tune.mp3',
  './assets/objects/apple.jpg',
  './assets/objects/banana.jpg',
  './assets/objects/grapes.jpg',
  './assets/objects/cherry.jpg',
  './assets/objects/watermelon.jpg',
  './assets/objects/pizza.jpg',
  './assets/objects/burger.jpg',
  './assets/objects/cake.jpg',
  './assets/objects/donut.jpg',
  './assets/objects/coffee.jpg',
  './assets/objects/star.jpg',
  './assets/objects/heart.jpg',
  './assets/objects/diamond.jpg',
  './assets/objects/crown.jpg',
  './assets/objects/lightning.jpg',
  './assets/objects/cat.jpg',
  './assets/objects/dog.jpg',
  './assets/objects/rabbit.jpg',
  './assets/objects/car.jpg',
  './assets/objects/rocket.jpg',
  './assets/objects/icon.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
