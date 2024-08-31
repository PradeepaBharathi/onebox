import React from 'react'
import inboxImage from '../../Assets/inboxImage.png';
import'./addmail.css'
function AddEmail() {
  return (
    <div className="addmail-content">
      <img src={inboxImage} alt="Inbox" className="mail-image" />
      <h2>👋 Add Email</h2>
      <p>Start adding your email accounts to start your campaign</p>
   
    </div>
  )
}

export default AddEmail