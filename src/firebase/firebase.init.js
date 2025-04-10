// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIJsvAmpcO7bEAxQEYTyMv7pDYWE_nqcE",
    authDomain: "mana-residence.firebaseapp.com",
    projectId: "mana-residence",
    storageBucket: "mana-residence.firebasestorage.app",
    messagingSenderId: "272494202161",
    appId: "1:272494202161:web:e9790786c00d602db23410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;