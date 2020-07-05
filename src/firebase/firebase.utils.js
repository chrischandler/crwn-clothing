import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhOkeuZCvKRfZbkekWvsaLT-ZrbmvhtFQ",
  authDomain: "crwn-db-28b85.firebaseapp.com",
  databaseURL: "https://crwn-db-28b85.firebaseio.com",
  projectId: "crwn-db-28b85",
  storageBucket: "crwn-db-28b85.appspot.com",
  messagingSenderId: "161808231405",
  appId: "1:161808231405:web:9ba576b1fe4fba869015e4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
