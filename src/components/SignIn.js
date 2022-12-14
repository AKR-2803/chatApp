import React from 'react'
import { auth } from '../firebase.js';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';



function SignIn(){

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    function signInWithGoogle(){
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user)
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <>
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center' ,height: '100vh', alignItems: 'center'}}>
          <h1>Welcom to ChatApp, to Continue Click Here:</h1>
            <div><FcGoogle onClick={signInWithGoogle} style={{cursor:'pointer'}} size={80} className="signIn"/></div>
        </div>
        </>
    )
}

export default SignIn