const firebaseConfig = {
  apiKey: "AIzaSyAd-btMUVDEgOnYVu7-SKJ2y-01jpq3Zyo",
  authDomain: "cadastro-agil.firebaseapp.com",
  databaseURL: "https://cadastro-agil-default-rtdb.firebaseio.com",
  projectId: "cadastro-agil",
  storageBucket: "cadastro-agil.firebasestorage.app",
  messagingSenderId: "11140466836",
  appId: "1:11140466836:web:61b7b4364b72cd670ecc81",
  measurementId: "G-F4ZZMHDV0F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();