import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAL0KD_dZpQBG7SaGjGfAYuH5w6VQP7dTg",
    authDomain: "anonymatus-4e3a3.firebaseapp.com",
    projectId: "anonymatus-4e3a3",
    storageBucket: "anonymatus-4e3a3.appspot.com",
    messagingSenderId: "85246982781",
    appId: "1:85246982781:web:58b7c631eaba2071598f14"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export default app;