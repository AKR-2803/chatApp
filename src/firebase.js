import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseApp = {
    apiKey: "AIzaSyCSoRJJSofBWfc1Sec1dY0zymbDBAh-xRo",
    authDomain: "chatapp-989f4.firebaseapp.com",
    projectId: "chatapp-989f4",
    storageBucket: "chatapp-989f4.appspot.com",
    messagingSenderId: "262424007115",
    appId: "1:262424007115:web:a20383827abae03dd2264e",
    measurementId: "G-3JLGXVMXSG"
};

const app = initializeApp(firebaseApp);

export const db = getFirestore(app);
export const auth = getAuth(app);