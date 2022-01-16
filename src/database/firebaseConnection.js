import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDjHbmNz266tVxiK5c8ylb79-FH2F8w8ZQ",
  authDomain: "ratapride.firebaseapp.com",
  projectId: "ratapride",
  storageBucket: "ratapride.appspot.com",
  messagingSenderId: "556782374351",
  appId: "1:556782374351:web:0a7efa47ed5c8756cf16ba",
  measurementId: "G-1X8VCHCMSV"
};


  firebase.initializeApp(firebaseConfig);


export default firebase;