var CACHE_NAME = 'mej-v1.1';
var urlsToCache = [
  '.',
  'index.html',
  '404.html',
  'offline.html',
  'disqus.html',

  'fonts/Lato_700_latin.woff2',
  'fonts/Lato_900_latin.woff2',
  'fonts/Roboto_Italic_400_latin.woff2',
  'fonts/Roboto_400_latin.woff2',

  'blog/yarn-a-new-client-for-npm/',
//  '/blog/yassgen/',
//  '/blog/building-a-website-with-gulpjs/',
//  '/blog/generating-a-static-website/',
//  '/blog/introduction/',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  //console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        //console.log('Found ', event.request.url, ' in cache');
        return response;
      }

      //console.log('Network request for ', event.request.url);

      return fetch(event.request).then(function(response) {
        if (response.status === 404) {
          return caches.match('404.html');
        }

        return caches.open(CACHE_NAME).then(function(cache) {
          if (event.request.url.indexOf('blog/') > 0) {
            cache.put(event.request.url, response.clone());
            //console.log('Cached ', event.request.url.indexOf('blog'),  event.request.url);
          }

          return response;
        });
      });

    }).catch(function(error) {
      //console.log('Error, ', error);
      return caches.match('offline.html');
    })
  );
});

/*
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // return from cache
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );
});
*/

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
