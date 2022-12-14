// import firebase from 'firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db, auth} from '../firebase'
import React, {useState} from 'react'
import { AiOutlineSend } from 'react-icons/ai';


function SendMessage({getData}) {

  const[msg, setMsg] = useState('');

  // async function sendMessage(e){
  //   e.preventDefault()
  //   const {uid, photoURL} = auth.currentUser

  //   await db.collection('messages').add({
  //     text: msg, 
  //     photoURL,
  //     uid,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp()
  //   })
  //   setMsg('');
  // }

  const sendMessage = async (e) => {
    e.preventDefault();  
    const {uid, photoURL, displayName } = auth.currentUser;
   
    try {
        const docRef = await addDoc(collection(db, 'messages'), {
          text: msg,
          photoURL,
          uid,
          displayName,
          createdAt: serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
        console.log(auth.currentUser);
        getData();
    }   catch (e) {
        console.error("Error message can't be sent: ", e);
    }
    setMsg('');
  } 

 
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="row">
          <input value={msg} onChange={(e)=>{setMsg(e.target.value)}} type="text" placeholder='Message...'  className="messageInput"/>
          <AiOutlineSend type='submit' onClick={sendMessage} size = {100} className="sendButton"/>
        </div>
      </form>
    </div>
  )
}

export default SendMessage
