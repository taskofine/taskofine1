// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSl8kSDj6zyXo57AESy85NxtyjXLL4fms",
  authDomain: "befriendme-53cf0.firebaseapp.com",
  projectId: "befriendme-53cf0",
  storageBucket: "befriendme-53cf0.appspot.com",
  messagingSenderId: "1060489782014",
  appId: "1:1060489782014:web:bae989b6dfa920f425fbaf",
  measurementId: "G-DKFN7Q623Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const auth = getAuth();