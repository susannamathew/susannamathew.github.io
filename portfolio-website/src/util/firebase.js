import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW3A4qv7SQTcZZ94Wo13OkR5_ljbmk1Tc",
    authDomain: "website-susanna.firebaseapp.com",
    databaseURL: "https://website-susanna-default-rtdb.firebaseio.com",
    projectId: "website-susanna",
    storageBucket: "website-susanna.appspot.com",
    messagingSenderId: "529709182438",
    appId: "1:529709182438:web:bb2f23c0402b5e332eba27",
    measurementId: "G-JX2EHGJMQS"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);