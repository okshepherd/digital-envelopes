import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAVMVlQEeHmVb6so1HxdJ4j8L6I_oawB9M",
    authDomain: "budgetapp-4dfc1.firebaseapp.com",
    projectId: "budgetapp-4dfc1",
    storageBucket: "budgetapp-4dfc1.appspot.com",
    messagingSenderId: "811539986550",
    appId: "1:811539986550:web:5e9e683d6e48a8100c0757",
    measurementId: "G-JLKC5DW0ER"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export const firestore = firebase.firestore();
export const storage = firebase.storage();