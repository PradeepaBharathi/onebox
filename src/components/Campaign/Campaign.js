import React from 'react'
import './container.css'
import inboxImage from '../../Assets/inboxImage.png';

function Campaign() {
  return (
    <div className="campaign-content">
    <img src={inboxImage} alt="Inbox" className="mail-image" />
   
    <p>💡Add a campaign to start sending emails</p>
 
  </div>
  )
}

export default Campaign