const CACHE_NAME = "offline-cache";
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([OFFLINE_URL]))
  );
});

self.addEventListener("fetch", (event: FetchEvent) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL).then((response) => {
          if (response) {
            return response;
          }
          return new Response("Offline page not found", {
            status: 404,
            headers: { "Content-Type": "text/plain" },
          });
        });
      })
    );
  }
});

declare const self: ServiceWorkerGlobalScope;
export {};
