const CACHE_NAME = "prayer-quran-v3";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "index.html",
        "css/styles.css",
        "js/main.js",
        "manifest.json",
        "images/app-icon-192x192.png",
        "images/app-icon-512x512.png",
        "js/adhan.esm.js",
        "data/surah.json",
      ]);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  // 1. Special logic for Page navigation - load, reload, bookmarks
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // If the exact URL is in the cache, use it.
        // Otherwise, safely fall back to the cached relative index.html.
        return cachedResponse || caches.match("index.html");
      }),
    );
    return; // Terminate the handler for this request early
  }

  // 2. Existing logic for all other assets (CSS, JS, images, JSON data)
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
