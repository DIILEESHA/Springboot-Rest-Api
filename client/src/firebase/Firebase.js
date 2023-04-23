import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrXoU8Z_M5zs-sXZ4t_lnG_ScE3ssaIPo",
  authDomain: "paf-auth.firebaseapp.com",
  projectId: "paf-auth",
  storageBucket: "paf-auth.appspot.com",
  messagingSenderId: "3781183895",
  appId: "1:3781183895:web:7ede3d9e8ffa3653109cd2",
  measurementId: "G-SJ8L6DQL06"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;