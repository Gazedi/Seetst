// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCQmITxB40DaUu4eiMGnFw8AGi9wXAnMJg",
  authDomain: "billpayapp-1eecf.firebaseapp.com",
  projectId: "billpayapp-1eecf",
  storageBucket: "billpayapp-1eecf.appspot.com",
  messagingSenderId: "806019984854",
  appId: "1:806019984854:web:8637618a0f62db48a30877"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("[firebase-messaging-sw.js] Received background message: ", payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: "/logo.png" // optional icon
  });
});
