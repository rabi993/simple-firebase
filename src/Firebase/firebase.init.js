// Do not store config on the client side 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhiXJMbp2dQsZSJXxjkeR0syLGxDTZx0",
  authDomain: "simple-firebase-234c8.firebaseapp.com",
  projectId: "simple-firebase-234c8",
  storageBucket: "simple-firebase-234c8.firebasestorage.app",
  messagingSenderId: "286444549682",
  appId: "1:286444549682:web:90024d3ca7051b84b3ee2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;