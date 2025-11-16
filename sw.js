// Minimal "killer" service worker for old installs
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => client.navigate(client.url));
      });
    })
  );
});

// No fetch handler – let the network handle everything
