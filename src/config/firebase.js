// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChevkdEOIt4sDRmUHSCU3CoQ2gIwNS0Z8",
  authDomain: "downmap-a46ab.firebaseapp.com",
  projectId: "downmap-a46ab",
  storageBucket: "downmap-a46ab.appspot.com",
  messagingSenderId: "949431273332",
  appId: "1:949431273332:web:4743a95c84524b210f4e21",
  measurementId: "G-SQQ7CHEJLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
