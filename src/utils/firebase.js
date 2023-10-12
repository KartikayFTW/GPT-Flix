// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "gpt-flix-348bb.firebaseapp.com",
  projectId: "gpt-flix-348bb",
  storageBucket: "gpt-flix-348bb.appspot.com",
  messagingSenderId: "244511641837",
  appId: "1:244511641837:web:002902e3ae2bb719263ce4",
  measurementId: "G-TN6J479F21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
