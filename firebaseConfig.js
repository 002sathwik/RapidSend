// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGHmr_uW7K3VXJGDkWDwDsVcAa_Ej6b74",
  authDomain: "sathwikh-b95ba.firebaseapp.com",
  databaseURL: "https://sathwikh-b95ba-default-rtdb.firebaseio.com",
  projectId: "sathwikh-b95ba",
  storageBucket: "sathwikh-b95ba.appspot.com",
  messagingSenderId: "863999626987",
  appId: "1:863999626987:web:b51ee70ef18d0f9b6038ae",
  measurementId: "G-1BE68TTEKJ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
