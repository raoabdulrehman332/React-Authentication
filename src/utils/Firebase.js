// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV6aKSgbMnlvvjLBt2K_7bbAPNJoU8jNo",
  authDomain: "react-auth-c21e5.firebaseapp.com",
  projectId: "react-auth-c21e5",
  storageBucket: "react-auth-c21e5.appspot.com",
  messagingSenderId: "1066475558165",
  appId: "1:1066475558165:web:27bd67fb5a30e2c626c51c",
  measurementId: "G-NWJF3CH7KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {app,auth,db}