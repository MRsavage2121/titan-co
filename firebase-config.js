// Firebase configuration for Titan Co
const firebaseConfig = {
  apiKey: "AIzaSyCVzykc1X2E6-0xyvc9zjVE9fnhi6tKPtY",
  authDomain: "titan-co.firebaseapp.com",
  projectId: "titan-co",
  storageBucket: "titan-co.firebasestorage.app",
  messagingSenderId: "28779104720",
  appId: "1:28779104720:web:ead20f924be037627bd1d5",
  measurementId: "G-F551R992V3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
