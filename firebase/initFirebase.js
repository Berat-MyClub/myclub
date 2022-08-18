import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1tezME0GYZiqU7vaDekwvs7TkT7Qhad0",
  authDomain: "myclub-afe03.firebaseapp.com",
  projectId: "myclub-afe03",
  storageBucket: "myclub-afe03.appspot.com",
  messagingSenderId: "597984147498",
  appId: "1:597984147498:web:ef1905c56ef1c87633eb53",
  measurementId: "G-EVML7YLNXY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function initFirebase() {
    if (!getFirestore.length) {
        initializeApp(firebaseConfig)
        console.log('init succesfull')
    }
}