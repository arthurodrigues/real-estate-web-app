// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-aa31f.firebaseapp.com",
  projectId: "mern-estate-aa31f",
  storageBucket: "mern-estate-aa31f.appspot.com",
  messagingSenderId: "234888009931",
  appId: "1:234888009931:web:0d4f3d893430dee781e34e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
