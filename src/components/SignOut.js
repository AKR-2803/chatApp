import React from 'react'
import { auth } from '../firebase.js';
import { GrLogout } from 'react-icons/gr';

function SignOut(){
    return(
        <div style={{
            display: 'flex', justifyContent: 'space-between',alignItems: 'center',width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <h1>ChatApp</h1>
            <GrLogout style={{paddingRight:'2rem', height:'2.5rem', cursor:'pointer'}} onClick = {() => auth.signOut()} size = {100}/>
        </div>
    );
}

export default SignOut