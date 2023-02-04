import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
