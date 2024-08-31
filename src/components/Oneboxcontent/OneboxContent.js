import React, { useEffect } from 'react';
import inboxImage from '../../Assets/inboxImage.png';
import './OneboxContent.css';
import { useLocation } from 'react-router-dom';

const OneboxContent = () => {
  const location = useLocation(); 
  useEffect(()=>{
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
   localStorage.setItem("authtoken",token)
  },[])
  return (
    <div className="onebox-content">
      <img src={inboxImage} alt="Inbox" className="inbox-image" />
      <h2>It's the beginning of a legendary sales pipeline</h2>
      <p>When you have inbound E-mails you'll see them here</p>
    </div>
  );
};

export default OneboxContent;
