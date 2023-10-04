// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8XtWPUwH8lwSnIup2VrF3-bExAdLprwU",
  authDomain: "email-authentication-6f2ca.firebaseapp.com",
  projectId: "email-authentication-6f2ca",
  storageBucket: "email-authentication-6f2ca.appspot.com",
  messagingSenderId: "103967112307",
  appId: "1:103967112307:web:2c4c09dc2dd9c074d0be06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;