// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "icartrade-258ef.firebaseapp.com",
  projectId: "icartrade-258ef",
  storageBucket: "icartrade-258ef.firebasestorage.app",
  messagingSenderId: "654741039768",
  appId: "1:654741039768:web:e277f29de3248d90b0beed",
  measurementId: "G-82BNHL6BGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);