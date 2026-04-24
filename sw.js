
// Install Service Worker
self.addEventListener('install', event => {
	console.log('Service Worker has been installed');
})

// Activering Service Worker
self.addEventListener('activate', event => {
	console.log('Service Worker has been activated');
})



// Fetch 
// Cache er åben
self.addEventListener('fetch', event => { //Kontroller svar på request
	event.respondWith(
    
    // Kig efter file match i cache

    caches.match(event.request).then(cacheRes => {
      // Hvis der er et match, returner det fra cache
      }).catch(() => {
        // Hvis ovnstående giver fejl kaldes fallback siden
        return caches.match('/pages/fallback.html')
      })

    )
  })
     
    caches.open('my-cache').then(function(cache) {
     
    });
    
// Array med filer
const assets = [
  'index.html', 
  'manifest.json',
]

caches.open('my-cache').then(cache => {
  // Tilføj enkelt fil
  // cache.add('/path/to/my/file.jpg');
  // Tilføj flere filer
  cache.addAll('assets'); 
});

catches.match('assets').then(response => {
  if(response) {
    // File findes i cache - brug den
  } else {
    // File findes ikke i cache - hent den
  }
})

caches.open('my-cache').then(cache => {
  cache.put('assets', new Response('new content'));
});

caches.open('my-cache').then(cache => {
  cache.delete('assets');
});

caches.open('my-cache').then(cache => {
  cache.add('assets ½').catch(error => {
    // Fejl håndtering
  });
});
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

