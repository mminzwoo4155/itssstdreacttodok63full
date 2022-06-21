import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu53j76Vl_isL2RifmRbsjb0UFbVgKx9k",
  authDomain: "fir-todo-c7c23.firebaseapp.com",
  projectId: "fir-todo-c7c23",
  storageBucket: "fir-todo-c7c23.appspot.com",
  messagingSenderId: "676680644669",
  appId: "1:676680644669:web:6e5bdabc5fa555999a1254",
  measurementId: "G-FTHBR66S2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);