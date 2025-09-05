const CACHE_NAME = 'clinica-sorriso-perfeito-v1';
const STATIC_CACHE_NAME = 'static-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2'
];

const CACHE_STRATEGIES = {
  images: 'cache-first',
  api: 'network-first',
  pages: 'stale-while-revalidate',
  static: 'cache-first'
};

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installed successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated successfully');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  if (request.method !== 'GET') {
    return;
  }

  if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com') {
    return;
  }

  event.respondWith(
    handleRequest(request)
  );
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    if (isStaticAsset(request)) {
      return await cacheFirst(request, STATIC_CACHE_NAME);
    }
    
    if (isImage(request)) {
      return await cacheFirst(request, DYNAMIC_CACHE_NAME);
    }
    
    if (isAPIRequest(request)) {
      return await networkFirst(request, DYNAMIC_CACHE_NAME);
    }
    
    return await staleWhileRevalidate(request, DYNAMIC_CACHE_NAME);
    
  } catch (error) {
    console.error('Service Worker: Fetch error', error);
    
    if (isHTMLRequest(request)) {
      return await caches.match('/') || new Response(
        createOfflinePage(),
        { 
          headers: { 'Content-Type': 'text/html' } 
        }
      );
    }
    
    return new Response('Network error', { status: 500 });
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    return cachedResponse || Promise.reject(error);
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  return STATIC_ASSETS.some(asset => 
    url.pathname === asset || request.url === asset
  );
}

function isImage(request) {
  return request.destination === 'image';
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
}

function isHTMLRequest(request) {
  return request.destination === 'document';
}

function createOfflinePage() {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Offline - Clínica Sorriso Perfeito</title>
      <style>
        body {
          font-family: 'Roboto', Arial, sans-serif;
          background: linear-gradient(135deg, #2E8B57 0%, #87CEEB 100%);
          color: #333;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .offline-container {
          text-align: center;
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          max-width: 500px;
          margin: 2rem;
        }
        .offline-icon {
          font-size: 4rem;
          color: #2E8B57;
          margin-bottom: 1rem;
        }
        h1 {
          color: #2E8B57;
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        p {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .retry-button {
          background: #2E8B57;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .retry-button:hover {
          background: #1e5f3f;
        }
      </style>
    </head>
    <body>
      <div class="offline-container">
        <div class="offline-icon">🦷</div>
        <h1>Você está offline</h1>
        <p>
          Não foi possível conectar à internet. Verifique sua conexão e tente novamente.
          A Clínica Sorriso Perfeito estará aqui quando você voltar!
        </p>
        <button class="retry-button" onclick="window.location.reload()">
          Tentar Novamente
        </button>
      </div>
    </body>
    </html>
  `;
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
  }
});

self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Ver detalhes',
          icon: '/icons/icon-96x96.png'
        },
        {
          action: 'close',
          title: 'Fechar',
          icon: '/icons/icon-96x96.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification('Clínica Sorriso Perfeito', options)
    );
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});