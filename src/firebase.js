import firebase from "firebase/compat/app"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAD9XvxY3xnpaerrKIO7sVp529zqTdZXuc",
    authDomain: "netflix-clone-3ecd6.firebaseapp.com",
    projectId: "netflix-clone-3ecd6",
    storageBucket: "netflix-clone-3ecd6.appspot.com",
    messagingSenderId: "221643167655",
    appId: "1:221643167655:web:ce5aa6980709cfe0508882",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
const db = getStorage(firebaseApp);
export default db;
