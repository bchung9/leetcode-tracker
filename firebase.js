// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  // Login function
  export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  // Logout function
  export const logOut = () => {
    return signOut(auth);
  };

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0Uft4yZzrBgg799AIQqOZ2ivgQJKBs2I",
    authDomain: "leetcode-tracker-cf248.firebaseapp.com",
    projectId: "leetcode-tracker-cf248",
    storageBucket: "leetcode-tracker-cf248.appspot.com",
    messagingSenderId: "19881691180",
    appId: "1:19881691180:web:261cf6d70056f97a646989"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
