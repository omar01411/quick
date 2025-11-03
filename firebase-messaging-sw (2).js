//// Import the necessary Firebase scripts for Firebase v9
//importScripts("https://www.gstatic.com/firebasejs/9.20.0/firebase-app-compat.js");
//importScripts("https://www.gstatic.com/firebasejs/9.20.0/firebase-messaging-compat.js");
//
//// Initialize Firebase app with your Firebase project credentials
//firebase.initializeApp({
//  apiKey: "AIzaSyCZjTaBIN7o1D0UdMWlVXWFXA3VJslyeLk",
//  authDomain: "quick-9fb37.firebaseapp.com",
//  projectId: "quick-9fb37",
//  storageBucket: "quick-9fb37.appspot.com",
//  messagingSenderId: "772977470954",
//  appId: "1:772977470954:web:96a3bb42972575adf7d693",
//  measurementId: "G-98MGR6B7YN"
//});
//
//// Get an instance of Firebase Messaging to handle background messages
//const messaging = firebase.messaging();
//
//// Set up an event handler for background messages
//messaging.onBackgroundMessage(function(payload) {
//  console.log('123  Received background messages ', payload);
//
//  // Extract notification data from the payload
//  const notificationTitle = payload.notification.title;
//  const notificationOptions = {
//    body: payload.notification.body,
//    icon: 'assets/images/icon.png', // Ensure this path is correct or update it
//    data: payload.data, // Include the payload data in the notification
//    tag: 'notification-' + Date.now() // Add a unique tag for each notification
//  };
//
//  // Show notification using the service worker's showNotification method
//  return self.registration.showNotification(notificationTitle, notificationOptions);
//});
//
//// Add event listener for notification click
//self.addEventListener('notificationclick', function(event) {
//  console.log('321  Notification clicked', event);
//
//  event.notification.close(); // Close the notification
//
//  // Get the notification data
//  const notificationData = event.notification.data;
//
//  // This will open the app and pass the notification data
//  event.waitUntil(
//    self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(function(clientList) {
//      // If a window client is found, navigate it to the notification route
//      for (var i = 0; i < clientList.length; i++) {
//        var client = clientList[i];
//        if ('focus' in client) {
//          client.focus();
//          client.postMessage({
//            type: 'NOTIFICATION_CLICK',
//            payload: notificationData
//          });
//          return;
//        }
//      }
//      // If no window client is found, open a new window
//      if (self.clients.openWindow) {
//        return self.clients.openWindow('/notification?data=' + encodeURIComponent(JSON.stringify(notificationData)));
//      }
//    })
//  );
//});