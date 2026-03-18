import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgRmpU2bx8bonB5IkeFIeQRL_b9v9fmk8",
  authDomain: "ump-admission-guide.firebaseapp.com",
  projectId: "ump-admission-guide",
  storageBucket: "ump-admission-guide.firebasestorage.app",
  messagingSenderId: "516334380297",
  appId: "1:516334380297:web:4f66e2e254e9e15251dfd8",
  measurementId: "G-S0KF6DKEJ5"
};

// 1. Initialize the Firebase App
const app = initializeApp(firebaseConfig);

// 2. Initialize Auth
export const auth = getAuth(app);

// 3. Initialize Firestore pointing to your specific 'ump-web' database
// Instead of just getFirestore(app), we pass the database name 'ump-web'
export const db = getFirestore(app);