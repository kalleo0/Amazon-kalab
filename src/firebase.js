// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA7apitLPrB69eTtSifdIA2DdWlk6kUBW4",
    authDomain: "kalab-d8e1b.firebaseapp.com",
    projectId: "kalab-d8e1b",
    storageBucket: "kalab-d8e1b.appspot.com",
    messagingSenderId: "201114156158",
    appId: "1:201114156158:web:3128afd117c27fdf40ac2f",
    measurementId: "G-DDMY08XQ4W"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };