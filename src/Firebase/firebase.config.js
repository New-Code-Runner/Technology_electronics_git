// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwzHRhJbjyGBxZJHrw0cSeqv_j8EBx1Jw",
  authDomain: "technology-electronic-auth.firebaseapp.com",
  projectId: "technology-electronic-auth",
  storageBucket: "technology-electronic-auth.appspot.com",
  messagingSenderId: "997542673346",
  appId: "1:997542673346:web:31557e592f19b6431c345b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;