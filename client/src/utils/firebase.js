import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "interviewiq-9758e.firebaseapp.com",
    projectId: "interviewiq-9758e",
    storageBucket: "interviewiq-9758e.firebasestorage.app",
    messagingSenderId: "948894689208",
    appId: "1:948894689208:web:c7059d9565b72fdac1d14d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}