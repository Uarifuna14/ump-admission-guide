import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMuK91vU5q-EOoZT-GnA0paf2Abq80zmM",
  authDomain: "brain-box-6a2b8.firebaseapp.com",
  projectId: "brain-box-6a2b8",
  storageBucket: "brain-box-6a2b8.firebasestorage.app",
  messagingSenderId: "661976104399",
  appId: "1:661976104399:web:380c454e4b376a4d5066ba",
  measurementId: "G-ED6ESH073W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export tools for use in our components
export const auth = getAuth(app);
export const db = getFirestore(app);