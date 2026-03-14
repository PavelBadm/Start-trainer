const CACHE = "start-trainer-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-180.png",
  "/icon-192.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
