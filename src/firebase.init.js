// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8JT6VGAFUJNXEu8IQgSymZOU2V93Iirg",
  authDomain: "private-route-with-emajhon.firebaseapp.com",
  projectId: "private-route-with-emajhon",
  storageBucket: "private-route-with-emajhon.appspot.com",
  messagingSenderId: "652935719707",
  appId: "1:652935719707:web:17d4c64a6c685c284141be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
