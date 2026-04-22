// Registering the service worker
if('ServiceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Service Worker registered', reg))
    .catch(err => console.error('service worker not refistered', err))

    }