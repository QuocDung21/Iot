import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAw5yLCe1yCkgYlTaf4XFH2JMjRpgl7jC8",
  authDomain: "sneaker-3dc8b.firebaseapp.com",
  projectId: "sneaker-3dc8b",
  storageBucket: "sneaker-3dc8b.appspot.com",
  messagingSenderId: "1047341859827",
  appId: "1:1047341859827:web:e54c98da4bf0f850e8c886",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
