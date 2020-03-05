// ver firebase.js de proyecto 9

const firebase = require("firebase/app")
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
    apiKey: "AIzaSyD8a0fOt_GD3Bcf5-tGhfP7ndcwrHzL_Ac",
    authDomain: "auth-c8e8b.firebaseapp.com",
    databaseURL: "https://auth-c8e8b.firebaseio.com",
    projectId: "auth-c8e8b",
    storageBucket: "auth-c8e8b.appspot.com",
    messagingSenderId: "1020497397215",
    appId: "1:1020497397215:web:1b26565138accb757ff06a"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {firebase, db, auth, storage}