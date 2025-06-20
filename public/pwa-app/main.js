// main.js

// Register the service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://biodata.coderobo.org/sw.js', {
        scope: 'https://biodata.coderobo.org/' // Explicit scope
    }).then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch((err) => {
        console.error('Service Worker registration failed:', err);
    });
}

