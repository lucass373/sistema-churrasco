import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg36YBY3Nb5VlZUFE19A7j3ZviqQeAZPQ",
  authDomain: "sistema-churrasco.firebaseapp.com",
  databaseURL: "https://sistema-churrasco-default-rtdb.firebaseio.com",
  projectId: "sistema-churrasco",
  storageBucket: "sistema-churrasco.appspot.com",
  messagingSenderId: "726591153744",
  appId: "1:726591153744:web:6ca66b612973f014fc9355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);