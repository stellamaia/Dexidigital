
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASHrNXNQHCRzsdPlY7xISf24wU-dxAGVU",
    authDomain: "dexidigital-59fa5.firebaseapp.com",
    projectId: "dexidigital-59fa5",
    storageBucket: "dexidigital-59fa5.appspot.com",
    messagingSenderId: "690595741669",
    appId: "1:690595741669:web:8fcf157abe1589ade3f90c",
    measurementId: "G-4R29PPN3G6"
  };

firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.firestore();
