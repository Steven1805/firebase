import {initializeApp} from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJWgsRN06FN4OWZw5jF0F5cNvyfhzhSG4",
  authDomain: "react-steven.firebaseapp.com",
  projectId: "react-steven",
  storageBucket: "react-steven.appspot.com",
  messagingSenderId: "684372843221",
  appId: "1:684372843221:web:3789ee1259ea8c240b605c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
