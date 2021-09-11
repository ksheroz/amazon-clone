import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlWSblWH6DI-5a0wVJhocOnL-CegKvnc8",
  authDomain: "clone-369aa.firebaseapp.com",
  projectId: "clone-369aa",
  storageBucket: "clone-369aa.appspot.com",
  messagingSenderId: "701378288055",
  appId: "1:701378288055:web:f600151606c5d074d43032",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
