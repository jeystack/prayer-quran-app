const CACHE_NAME = "prayer-quran-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "index.html",
        "css/styles.css",
        "js/main.js",
        "manifest.json",
        "images/app-icon-192x192.png",
        "images/app-icon-512x512.png",
        "data/surah.json",
      ]);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Cache hit - return the cached version
      if (cachedResponse) {
        return cachedResponse;
      }

      // Cache miss - fetch from network
      return fetch(event.request).then((networkResponse) => {
        // Cache JSON data files for the future offline use
        if (event.request.url.includes("data/")) {
          const clone = networkResponse.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      });
    }),
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
        }),
      );
    }),
  );
});
