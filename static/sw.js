importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/44ffef7.js",
    "revision": "5131250e0a7956a05a045c526fc77f4d"
  },
  {
    "url": "/_nuxt/539f4b2.js",
    "revision": "3b6eca2817614a0cd4f97ba8f99db509"
  },
  {
    "url": "/_nuxt/8a6e457.js",
    "revision": "76c8753289f624e2dbebb40744f4e80e"
  },
  {
    "url": "/_nuxt/92fef93.js",
    "revision": "06c2228f4857bd7995390fd0b4b82a35"
  },
  {
    "url": "/_nuxt/app.76e8b2a.css",
    "revision": "eaaf790deb5b4cc737c1f4c0628fe3a8"
  },
  {
    "url": "/_nuxt/b8c0490.js",
    "revision": "b338dd3958716b307a7997f82968a60b"
  },
  {
    "url": "/_nuxt/c693cc9.js",
    "revision": "44bf8f2551701ffdd4dcffc9944847cd"
  },
  {
    "url": "/_nuxt/d2849d0.js",
    "revision": "c317b29ddc890186033d08e0078ca3a3"
  },
  {
    "url": "/_nuxt/ea1b02c.js",
    "revision": "80d581b55414e204737327959f5d85cf"
  },
  {
    "url": "/_nuxt/f7152d7.js",
    "revision": "04d805c807b74f6454a60746bf6aa8a2"
  },
  {
    "url": "/_nuxt/pages/categories.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/_slug.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/index.fc6cde2.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  },
  {
    "url": "/_nuxt/vendors/app.920e5d8.css",
    "revision": "3e3569ee1fdeca689c8b42a2f26636bd"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
