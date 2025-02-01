// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAECLv9Ea3wLDAmUAGaMsTekPQzVUrcz3E",
  authDomain: "react-proyecto-daee7.firebaseapp.com",
  projectId: "react-proyecto-daee7",
  storageBucket: "react-proyecto-daee7.firebasestorage.app",
  messagingSenderId: "333819973567",
  appId: "1:333819973567:web:dc665fbbca23aab5041b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);