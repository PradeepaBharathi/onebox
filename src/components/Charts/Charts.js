import React from 'react'
import'./Charts.css'
import inboxImage from '../../Assets/inboxImage.png';

function Charts() {
  return (
    <div className="campaign-content">
    <img src={inboxImage} alt="Inbox" className="mail-image" />
   
    <p>📊Oops! The Campaign you searched for doesn't exists.</p>
 
  </div>
  )
}

export default Charts