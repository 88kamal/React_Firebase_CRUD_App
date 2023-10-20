import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBoQLYEOPRw4v_aUKlbDa2cgaR3sGbiaWE",
    authDomain: "job-portal-1f8b3.firebaseapp.com",
    projectId: "job-portal-1f8b3",
    storageBucket: "job-portal-1f8b3.appspot.com",
    messagingSenderId: "1036950302744",
    appId: "1:1036950302744:web:d9ff2a0f317dddb35b536d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const fireDB = getFirestore(app)