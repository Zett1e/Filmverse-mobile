// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWQbnkAGOg3a6SqAZQqUilDGSw3_HlHpI",
  authDomain: "filmverse.firebaseapp.com",
  projectId: "filmverse",
  storageBucket: "filmverse.appspot.com",
  messagingSenderId: "841456764478",
  appId: "1:841456764478:web:9cc482fcbce776f0fe336f",
  measurementId: "G-LFSYZT7DFH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
