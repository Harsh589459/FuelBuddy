import { createApp } from 'vue'
import router from './router'
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
// import VueFire from "vuefire";
import firebase from "firebase";
//import "firebase/firestore";
//Vue.use(VueFire);
import { firestorePlugin } from "vuefire";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

firebase.initializeApp({
  databaseURL: "https://image-upload-62ed7.firebaseio.com",
  projectId: "image-upload-62ed7"
});

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

export const db = firebase.firestore();
//const vuetifyOptions = {};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  //vuetify: new Vuetify(vuetifyOptions)
  vuetify: new Vuetify()
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';

const app = createApp(App);
app.use(router);
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createApp(App).mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



Vue.use(firestorePlugin);
Vue.use(Vuetify);

Vue.config.productionTip = false;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlK9s3qqA7GH3mHn1dYkU2o1cSV1tiNzg",
  authDomain: "fuel-buddy-dc78c.firebaseapp.com",
  projectId: "fuel-buddy-dc78c",
  storageBucket: "fuel-buddy-dc78c.appspot.com",
  messagingSenderId: "870322191655",
  appId: "1:870322191655:web:2efb338375003c40a9bd02",
  measurementId: "G-JTP08BM81J"  
};

// Initialize Firebase


