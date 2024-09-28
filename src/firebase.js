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
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
