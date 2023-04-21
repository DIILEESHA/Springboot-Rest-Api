// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3GUi3KMuxzmKLSzK_iLa54DOcLnJB2xw",
  authDomain: "auth-3ca43.firebaseapp.com",
  projectId: "auth-3ca43",
  storageBucket: "auth-3ca43.appspot.com",
  messagingSenderId: "788627974647",
  appId: "1:788627974647:web:5a9cfadc9234c7169126f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
