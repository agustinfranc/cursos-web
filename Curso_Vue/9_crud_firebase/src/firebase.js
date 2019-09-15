import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDr_iIWjJBDAfbz89lueSpknm0Dh_VTJiw",
  authDomain: "cli-crud.firebaseapp.com",
  databaseURL: "https://cli-crud.firebaseio.com",
  projectId: "cli-crud",
  storageBucket: "cli-crud.appspot.com",
  messagingSenderId: "920313949698",
  appId: "1:920313949698:web:ee95a4222c975da4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()