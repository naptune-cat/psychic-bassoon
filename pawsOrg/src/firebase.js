import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import for Realtime Database
import { getStorage } from 'firebase/storage'; // Import for Storage

const firebaseConfig = {
  apiKey: "AIzaSyDwDk_RPyoxebeJM1S5DRokRasml2aoDlk",
  authDomain: "petsorg.firebaseapp.com",
  databaseURL: "https://petsorg-default-rtdb.firebaseio.com", // Correct URL
  projectId: "petsorg",
  storageBucket: "petsorg.appspot.com",
  messagingSenderId: "165004234991",
  appId: "1:165004234991:web:0a73a058fe460c33554b1a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // For Realtime Database
export const storage = getStorage(app); // For Firebase Storage
