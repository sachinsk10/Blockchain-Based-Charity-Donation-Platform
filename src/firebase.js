// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb70M84epYJQs4eQwCZuIWy-WQXHa_iLA",
  authDomain: "charitydonation-dd7ea.firebaseapp.com",
  projectId: "charitydonation-dd7ea",
  storageBucket: "charitydonation-dd7ea.appspot.com",
  messagingSenderId: "456873064677",
  appId: "1:456873064677:web:391e645b294a72da7b3c0c",
  measurementId: "G-JFFVLQYE7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export what you need
export { db, collection, addDoc, storage, auth };
