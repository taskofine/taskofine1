// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMoOaojRrn5_rdmgZvkkGhnicBJdsjFw",
  authDomain: "taskofine-c9b26.firebaseapp.com",
  projectId: "taskofine-c9b26",
  storageBucket: "taskofine-c9b26.appspot.com",
  messagingSenderId: "78285732193",
  appId: "1:78285732193:web:7f28494f86fb1310e56d20"
 // measurementId: "G-DKFN7Q623Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const auth = getAuth();