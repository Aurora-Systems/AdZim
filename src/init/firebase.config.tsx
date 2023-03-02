// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsM6YeKgOvbOIGTOFPF_mCa5cePD_UeI8",
  authDomain: "adzim-ddb06.firebaseapp.com",
  projectId: "adzim-ddb06",
  storageBucket: "adzim-ddb06.appspot.com",
  messagingSenderId: "753059811178",
  appId: "1:753059811178:web:d196e1e5b43e4baad35f13",
  measurementId: "G-FNJ3E62PRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app); 