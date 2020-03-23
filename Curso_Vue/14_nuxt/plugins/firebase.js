import firebase from "firebase/app";
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
  apiKey: "AIzaSyCfJ-VtNsxxNtQAO4MYcqvWFYr_rJfIILs",
  authDomain: "nuxt-f8af4.firebaseapp.com",
  databaseURL: "https://nuxt-f8af4.firebaseio.com",
  projectId: "nuxt-f8af4",
  storageBucket: "nuxt-f8af4.appspot.com",
  messagingSenderId: "552787591290",
  appId: "1:552787591290:web:fc6188b76da8d0d128bbc3"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}