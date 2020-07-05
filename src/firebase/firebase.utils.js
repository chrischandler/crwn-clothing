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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If the user object is null, do nothing
  if (!userAuth) return;

  // Get the document from the database
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
