import { Box } from '@mui/material'
import React, { useState } from 'react'
import Inbox from '../Inbox/Inbox'
import EmailDetails from '../Emaildetails/EmailDetails'
import LeadDetails from '../Leaddetails/LeadDeatils'
import'./Main.css'


function Main() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
  };
  
  return (
    <Box className='main-container' >
   
          <Inbox  onEmailSelect={handleEmailSelect} className='inbox-card'/>
          <div className='breaker'></div>
      
          <EmailDetails email={selectedEmail} className='email-card'/>
          <div className='breaker'></div>

          <LeadDetails className='lead-card'/>
        </Box>
  )
}

export default Main