import { Vue } from 'vue'
import App from './App.vue'
import firebase from 'firebase'

console.log("vue:" + Vue)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5csZdF5t9nNHqpNfwmDEVB6V60XhPKXY",
    authDomain: "chat-app-8deb9.firebaseapp.com",
    databaseURL: "https://chat-app-8deb9-default-rtdb.firebaseio.com",
    projectId: "chat-app-8deb9",
    storageBucket: "chat-app-8deb9.appspot.com",
    messagingSenderId: "186176722473",
    appId: "1:186176722473:web:47dbabe786c5e51c022e38",
    measurementId: "G-62JT3V4RP3"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})