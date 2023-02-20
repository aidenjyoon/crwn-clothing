import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-V4b7vDJ9AsOK_UXhhSwpLrh66vxIG6M",
  authDomain: "crwn-clothing-db-34d55.firebaseapp.com",
  projectId: "crwn-clothing-db-34d55",
  storageBucket: "crwn-clothing-db-34d55.appspot.com",
  messagingSenderId: "370131146291",
  appId: "1:370131146291:web:c3cd2951082e931867f546",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// steps:
// if user data does not exist
//// create/set the document with the data from userAuth in my collection
// if user data exists
//// return userDocRef
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  // in case userAuth didn't work
  if (!userAuth) {
    return;
  }

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("There was an error creating the user.", error.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // in case email and/or password isn't correctly formatted
  if (!email || !password) return;

  // return signInUserWithEmailAndPassword(email, password);
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    console.error("wrong email or password");
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};
