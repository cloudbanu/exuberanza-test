const CACHE_NAME = 'artsfest-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/config.js',
    '/app.js',
    '/admin.js',
    '/leader.js',
    '/invigilator.js',
    '/judge.js',
    '/announcer.js',
    '/manifest.json',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/@supabase/supabase-js@2'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});
