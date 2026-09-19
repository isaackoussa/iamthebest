// Service worker : reçoit les notifications de rappel et les affiche.
// Aucun cache hors ligne ici — uniquement le push, pour rester simple et
// ne pas risquer de servir une version périmée de l'appli.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('push', event => {
  let data = { title: 'Rappel', body: '', url: '#/admin' };
  try {
    if (event.data) data = Object.assign(data, event.data.json());
  } catch (e) {
    if (event.data) data.body = event.data.text();
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      tag: 'rappel-rdv',
      renotify: true,
      data: { url: data.url || '#/admin' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || '#/admin';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      // Si l'appli est déjà ouverte quelque part, on la ramène au premier plan.
      for (const client of list) {
        if ('focus' in client) { client.navigate(target); return client.focus(); }
      }
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});
