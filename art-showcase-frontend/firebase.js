// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Corrected syntax

const firebaseConfig = {
  apiKey: "AIzaSyCIHZUFqxpGX6H81VQQduzSzaEKRGXJ8e0",
  authDomain: "art-nest-ea670.firebaseapp.com",
  projectId: "art-nest-ea670",
  storageBucket: "art-nest-ea670.appspot.com",
  messagingSenderId: "877614014873",
  appId: "1:877614014873:web:4eab52e669fa137592b308",
  measurementId: "G-CT6K00HVY0",
  databaseURL: "gs://art-nest-ea670.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

