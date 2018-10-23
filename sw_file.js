
// assign cache version Name
const cacheName = 'rangoliv1';

// target initial file for caching
const cacheAssets = [
    './',
    './css/style.css',
    './js/jquery-3.3.1.min.js',
    './js/main.js',
    './index.html',
    './image/center.gif',
    './image/images-1.jpg',
    './image/raspberry.png',
    './image/favicon.ico',
    './bootstrap4/css/bootstrap-grid.css',
    './bootstrap4/css/bootstrap-grid.css.map',
    './bootstrap4/css/bootstrap-grid.min.css',
    './bootstrap4/css/bootstrap-grid.min.css.map',
    './bootstrap4/css/bootstrap-reboot.css',
    './bootstrap4/css/bootstrap-reboot.css.map',
    './bootstrap4/css/bootstrap-reboot.min.css',
    './bootstrap4/css/bootstrap-reboot.min.css.map',
    './bootstrap4/css/bootstrap.css',
    './bootstrap4/css/bootstrap.css.map',
    './bootstrap4/css/bootstrap.min.css',
    './bootstrap4/css/bootstrap.min.css.map',
    './bootstrap4/js/bootstrap.bundle.js',
    './bootstrap4/js/bootstrap.bundle.js.map',
    './bootstrap4/js/bootstrap.bundle.min.js',
    './bootstrap4/js/bootstrap.bundle.min.js.map',
    './bootstrap4/js/bootstrap.js',
    './bootstrap4/js/bootstrap.js.map',
    './bootstrap4/js/bootstrap.min.js',
    './bootstrap4/js/bootstrap.min.js.map',
    './bootstrap4/js/'
];

// Call Install Event
self.addEventListener('install', e => {
    console.log('Service Worker: Installed');

    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker: Caching Files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching', e.request.url);
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

