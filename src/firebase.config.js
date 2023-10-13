import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAUeU8WmNeADjA8ic65FUI2P5pwyc1vk4",
  authDomain: "destproject-c93d8.firebaseapp.com",
  projectId: "destproject-c93d8",
  storageBucket: "destproject-c93d8.appspot.com",
  messagingSenderId: "650049862648",
  appId: "1:650049862648:web:32d000092e6a8f55a4f40d",
  measurementId: "G-SP91L9QQ9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
