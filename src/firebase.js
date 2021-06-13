import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQvNCE-gyldXggitsQT9kI7hNBnlkK494",
    authDomain: "amzon-clone-46b1a.firebaseapp.com",
    projectId: "amzon-clone-46b1a",
    storageBucket: "amzon-clone-46b1a.appspot.com",
    messagingSenderId: "536519801190",
    appId: "1:536519801190:web:6bf31f25fd03ae306fb0a7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };