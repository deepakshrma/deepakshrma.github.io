function isCacheable(request) {
  const url = new URL(request.url);
  return url.host.includes("picsum.photos") || request.url.includes("jokes/categories") || url.pathname.match(/\.(png|jpeg|jpg|webp)$/);
}


async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("image_cache");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});