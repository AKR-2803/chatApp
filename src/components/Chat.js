import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase';
import SignOut from './SignOut'
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import SendMessage from './SendMessage';

function Chat() {

  const [messages, setMessages] = useState([]);

  function getData(){
    const q = query(collection(db, "messages"), orderBy('createdAt'));

    getDocs(q).then((docSnap)=>{
      let arr = [];

      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        arr.push(doc.data());
      });

      setMessages(arr);
      
    })
  }

  useEffect(() => {
      getData();
  }, [])


  return (

    <div>
      <SignOut/>
      <div className = 'msgs'>
          {messages.map(({id, text, photoURL,displayName, uid})=> {
            return (
              <div>
                <div key = {id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                <div className='userMsg'>
                    <img src={photoURL} alt="" style={{width:'3rem'}}/>
                  <div style={{marginBottom: '1rem', marginLeft:'0.5rem'}}>
                    {displayName}
                  </div>
                </div>
                  <p>{text}</p>
                </div>
                
              </div>
            )   
          })}
      </div>
      <SendMessage getData={getData}/>
    </div>
  )
}

export default Chat
