// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHYnLobddRQ0DqBlBdNGZCDs40BySHxfc",
  authDomain: "applogin-e805f.firebaseapp.com",
  projectId: "applogin-e805f",
  storageBucket: "applogin-e805f.appspot.com",
  messagingSenderId: "217707278561",
  appId: "1:217707278561:web:b1534f1f52f10ed1fd07a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);