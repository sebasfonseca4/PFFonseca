import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT3ktbkqkpBFoIcBZeHkRO1Ju8dKSXnHA",
  authDomain: "eccomerce-react-3d40b.firebaseapp.com",
  projectId: "eccomerce-react-3d40b",
  storageBucket: "eccomerce-react-3d40b.appspot.com",
  messagingSenderId: "790897222755",
  appId: "1:790897222755:web:ae7b29136ccfe306330456"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
