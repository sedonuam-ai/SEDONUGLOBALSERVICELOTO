const V = 'sedonu-v1';
const FILES = [
  '/sedonu/',
  '/sedonu/index.html',
  '/sedonu/manifest.json',
  '/sedonu/icons/icon-192.png',
  '/sedonu/icons/icon-512.png'
];
self.addEventListener('install',  e => { e.waitUntil(caches.open(V).then(c=>c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch',    e => { e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
