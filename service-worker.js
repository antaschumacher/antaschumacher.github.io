importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded!`);
} else {
  console.log(`Boo! Workbox didn't load!`);
}

workbox.precaching.precacheAndRoute([
    {url: "/", revision: '2'},
    {url: "/index.html", revision: '2'},
    {url: "/app.js", revision: '6'},
    {url: "/teams.html", revision: '2'},
    {url: "/team-details.html", revision: '3'},
    {url: "/saved-team.html", revision: '2'},
    {url: "/manifest.json", revision: '2'},
    {url: "/css/materialize.min.css", revision: '2'},
    {url: "/css/style.css", revision: '2'},
    {url: "/js/materialize.min.js", revision: '2'},
    {url: "/js/nav.js", revision: '2'},
    {url: "/js/register-service-worker.js", revision: '2'},
    {url: "/js/request-notification-permission.js", revision: '2'},
    {url: "/js/api.js", revision: '2'},
    {url: "/js/db.js", revision: '3'},
    {url: "/js/api/standings.js", revision: '2'},
    {url: "/js/api/teams.js", revision: '2'},
    {url: "/js/api/team-details.js", revision: '2'},
    {url: "/js/db/idb.js", revision: '2'}
], {
    ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages'
    })
);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg|ico)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 21,
                maxEntries: 30
            })
        ]
    })
);

workbox.routing.registerRoute(
    /^https:\/\/ajax\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'jQuery-cache'
    })
)

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'material-icon'
    })
)

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'material-icon'
    })
)

workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-font-webfonts',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 21,
                maxEntries: 30
            })
        ]
    })
)

workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'api-football'
    })
)

self.addEventListener("push", function(event) {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message has no payload';
    }

    const options = {
        body: body,
        icon: '/icons/Football-Mania-Logo-256x256.png',
        badge: '/icons/Football-Mania-Logo-192x192.png',
        silent: true,
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});