// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyB6ytbdWsM38AMhqSYbaYsAtecCG2sYpzA",
  authDomain: "car-book-2339b.firebaseapp.com",
  projectId: "car-book-2339b",
  storageBucket: "car-book-2339b.appspot.com",
  messagingSenderId: "150713261050",
  appId: "1:150713261050:web:e106912a5a46e5d5a9a243",
  measurementId: "G-9RJPVNTRFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
export const db = getDatabase(app)
export const auth = getAuth(app)
export const fireDB = getFirestore(app)

export default app