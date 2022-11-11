// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDedqZh1oht-kvTvSLLyFN_GPmbQxW5rls",
  authDomain: "netflix-copy-diploma.firebaseapp.com",
  projectId: "netflix-copy-diploma",
  storageBucket: "netflix-copy-diploma.appspot.com",
  messagingSenderId: "859571345222",
  appId: "1:859571345222:web:546e9f32a931e04a3bb747",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
