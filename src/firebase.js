// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqbk-wCKwE7l1RNhr7Yfa0PeqnWuEQnWQ",
  authDomain: "webdev-assignment-3-5cb03.firebaseapp.com",
  projectId: "webdev-assignment-3-5cb03",
  storageBucket: "webdev-assignment-3-5cb03.appspot.com",
  messagingSenderId: "815321339170",
  appId: "1:815321339170:web:d5966e26b626c9ee3d817b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);