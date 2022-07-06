import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNeByYKLcC_OrJ-8WqPU6sDar9sJ1W8ig",
    authDomain: "apt-dashboard-affd4.firebaseapp.com",
    projectId: "apt-dashboard-affd4",
    storageBucket: "apt-dashboard-affd4.appspot.com",
    messagingSenderId: "349341010264",
    appId: "1:349341010264:web:7b92c05e8ab62328f8fd2d",
    measurementId: "G-EEDH25KE8Q"
  };

const app = initializeApp (firebaseConfig);

export const db=  getFirestore(app);