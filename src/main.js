import { createApp } from 'vue'
import App from './App'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

//Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA5csZdF5t9nNHqpNfwmDEVB6V60XhPKXY",
  authDomain: "chat-app-8deb9.firebaseapp.com",
  databaseURL: "https://chat-app-8deb9-default-rtdb.firebaseio.com",
  projectId: "chat-app-8deb9",
  storageBucket: "chat-app-8deb9.appspot.com",
  messagingSenderId: "186176722473",
  appId: "1:186176722473:web:47dbabe786c5e51c022e38",
  measurementId: "G-62JT3V4RP3"
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

/* eslint-disable no-new */
createApp(App).mount('#app')
