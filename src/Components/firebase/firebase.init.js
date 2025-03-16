// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHW06ZIHteeukDmQrxNTP2zvsR9s08xME",
  authDomain: "fanding-donate.firebaseapp.com",
  projectId: "fanding-donate",
  storageBucket: "fanding-donate.firebasestorage.app",
  messagingSenderId: "829499879858",
  appId: "1:829499879858:web:17ccdcee29368e7ac234ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);