// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDciqhA9rSeIh97LbG653OmgqgP5rp2Xpk",
  authDomain: "proyectofirereact.firebaseapp.com",
  projectId: "proyectofirereact",
  storageBucket: "proyectofirereact.appspot.com",
  messagingSenderId: "741783428124",
  appId: "1:741783428124:web:4de5c0fbae51fa25b4d3d9",
  measurementId: "G-NKW8J423F1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

