import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import './Leaddetails.css'

const LeadDetails = () => {
  return (
    <Box className="lead-info">
      <Typography variant="h6" className="typography-white">Lead Details</Typography>
      <Divider className="divider" />
    <Box className='lead-information'>
    <Typography variant="body2" className="typography-white">Name: Orlando</Typography>
      <Typography variant="body2" className="typography-white">Contact No: +54-9062827869</Typography>
      <Typography variant="body2" className="typography-white">Email ID: orlando@gmail.com</Typography>
      <Typography variant="body2" className="typography-white">LinkedIn: linkedin.com/in/timvadde/</Typography>
      <Typography variant="body2" className="typography-white">Company Name: Reachinbox</Typography>
    </Box>
      <Divider className="divider" />
    <Box className='activity'>
    <Typography variant="h6" className="typography-white">Activities</Typography>
      <Typography variant="body2" className="typography-white">Campaign Name: 3 Steps | 5 Days in Sequence</Typography>
      <Typography variant="body2" className="typography-white">Step 1: Email Sent 3rd, Feb</Typography>
      <Typography variant="body2" className="typography-white">Step 2: Email Opened 5th, Feb</Typography>
      <Typography variant="body2" className="typography-white">Step 3: Email Opened 5th, Feb</Typography>
    </Box>
    </Box>
  );
};

export default LeadDetails;
