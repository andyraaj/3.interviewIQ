
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interviewiq.firebaseapp.com",
  projectId: "ai-interviewiq",
  storageBucket: "ai-interviewiq.firebasestorage.app",
  messagingSenderId: "818522335253",
  appId: "1:818522335253:web:e3744f831112e4361fc61c"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}