// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore' 
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzV6IvKV1CRDEXxvD-Tt93fm_eulS75Rg",
  authDomain: "assignments-2e3df.firebaseapp.com",
  projectId: "assignments-2e3df",
  storageBucket: "assignments-2e3df.appspot.com",
  messagingSenderId: "25888563487",
  appId: "1:25888563487:web:b20d68ed751d8c4982102a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase=getFirestore(app);
export const storage = getStorage(app);
