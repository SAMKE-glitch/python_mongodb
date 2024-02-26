import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBuVkaBNCpjzd13JtPkP3VQVzElerJuQrI",
  authDomain: "igome-eb31d.firebaseapp.com",
  projectId: "igome-eb31d",
  storageBucket: "igome-eb31d.appspot.com",
  messagingSenderId: "402894316399",
  appId: "1:402894316399:web:e04821c7afa94658743e9a",
  measurementId: "G-W64M25Y40P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
