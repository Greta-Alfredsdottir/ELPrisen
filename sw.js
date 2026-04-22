// Install Service Worker
self.addEventListener('install', event => {
	console.log('Service Worker has been installed');
})

// Install Service Worker
self.addEventListener('activate', event => {
	console.log('Service Worker has been activated');
})
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
	console.log('Fetch event', event)
})

caches.open('my-cache').then(function(cache) {
  // Cache er åben
});

// Array med filer
const assets = [
  '/path/to/my/file1.jpg', 
  '/path/to/my/file2.jpg'
]

caches.open('my-cache').then(cache => {
  // Tilføj enkelt fil
  cache.add('/path/to/my/file.jpg');
  // Tilføj flere filer
  cache.addAll(assets); 
});

caches.match('/path/to/my/file.jpg').then(response => {
  if (response) {
    // Fil findes i cache - brug den
  } else {
    // Fil findes ikke i cache - hent den
  }
});


caches.open('my-cache').then(cache => {
  cache.put('/path/to/my/file.jpg', new Response('new content'));
});

caches.open('my-cache').then(cache => {
  cache.delete('/path/to/my/file.jpg');
});

caches.open('my-cache').then(cache => {
  cache.add('/path/to/my/file.jpg').catch(error => {
    // Fejl håndtering
  });
});

