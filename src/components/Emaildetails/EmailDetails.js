import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider, Button, TextField, IconButton, Select, MenuItem, Dialog, DialogContent } from '@mui/material';
import './Emaildetails.css';
import EmojiPicker from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ReplyIcon from '@mui/icons-material/Reply';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseIcon from '@mui/icons-material/Close';
import { convert } from 'html-to-text';
import { useThemeContext } from '../Theme/Theme';

const EmailDetails = ({ email }) => {
  console.log(email)
  const [popup, setPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedMeetingOption, setSelectedMeetingOption] = useState('');
  const [moreOptions, setMoreOptions] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); 
  const [replyTo, setReplyTo] = useState(''); 
  const [replyFrom, setReplyFrom] = useState(''); 
  const [replySubject, setReplySubject] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
 
  const [replyBody, setReplyBody] = useState(''); 
  const handleSave = () => {
    console.log('Save clicked');
  };

  const handleVariables = () => {
    console.log('Variables clicked');
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'delete') {
      setShowConfirmDelete(true); 
    }
  };

  const handleMeetingChange = (event) => {
    setSelectedMeetingOption(event.target.value);
  };

  const handleMoreOptions = (event) => {
    setMoreOptions(event.target.value);
    if (event.target.value === 'delete') {
      setShowConfirmDelete(true); 
    }
  };

 const handleConfirmDelete = async () => {
    const token = localStorage.getItem('authtoken'); 
    console.log(token)
    const threadId = email.threadId; 
    console.log(threadId)
    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Email deleted successfully');
        window.location.reload()
        
      } else {
        alert('Failed to delete email');
      }
    } catch (error) {
      console.error('Error deleting email:', error);
    }

    setShowConfirmDelete(false);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ( event.key === 'D') {
        
        setShowConfirmDelete(true);
      } else if ( event.key === 'R') {
       
        setOpen(true);
      }
    };

    
    window.addEventListener('keydown', handleKeyDown);

   
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCancelDelete = () => {
    setShowConfirmDelete(false); 
  };

  const handleSend = async () => {
    const token = localStorage.getItem('authtoken');
    const threadId = email.threadId;

    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: replyFrom,
          to: replyTo,
          subject: replySubject,
          body: replyBody
        })
      });

      if (response.ok) {
        alert('Reply sent successfully');
        handleClose();
      } else {
        alert('Failed to send reply');
      }
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };
  if (!email) {
    return <Box>No email selected</Box>;
  }

  const emailBodyText = convert(email.body, {
    wordwrap: 130,
  });

  const handleEmoji = () => {
    setPopup(true);
  };

  const onEmojiClick = (emojiData) => {
    const { emoji } = emojiData;
    setReplyBody((prevState) => ({
      ...prevState,
      [replyBody]: prevState[replyBody] + emoji,
    }));
    setPopup(false);
  };
  
  const handleEmojiClose = () => {
    setPopup(false);

  };
  return (
    <Box className="email-details">
      <Box className='lead'>
        <Box className='lead-details'>
          <Typography>Orlando</Typography>
          <Typography>orlando@gmail.com</Typography>
        </Box>
        <Box className='lead-actions'>
          <Select
            value={selectedMeetingOption}
            onChange={handleMeetingChange}
            displayEmpty
            className= 'move'
            sx={{
              color: 'grey',  // Set the text color to grey
              '& .MuiSelect-icon': {
                color: 'grey', // Color of the dropdown arrow
              },
            }}
          >
            <MenuItem value="" disabled>Meeting yet to be scheduled</MenuItem>
            <MenuItem value="drafts">Meeting today</MenuItem>
            <MenuItem value="sentitems">Meeting Completed</MenuItem>
          </Select>

          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            displayEmpty
            className='move'
            sx={{
              color: 'grey',  
              '& .MuiSelect-icon': {
                color: 'grey', 
              },
            }}
          >
            <MenuItem value="" disabled>Move</MenuItem>
            <MenuItem value="drafts">Drafts</MenuItem>
            <MenuItem value="sentitems">Sent Items</MenuItem>
          </Select>

          <Select
            value={moreOptions}
            onChange={handleMoreOptions}
            displayEmpty
            className='move'
            sx={{
              color: 'grey',  
              '& .MuiSelect-icon': {
                color: 'grey',
              },
            }}
          >
            <MenuItem value="">Mark as unread</MenuItem>
            <MenuItem value="delete">Delete</MenuItem>
          </Select>
        </Box>
      </Box>
      <Divider className="divider" />
      <Box className="divider-container">
        <Box className="line"></Box>
        <span className="today-text">Today</span>
        <Box className="line"></Box>
      </Box>
      <Box className='email-head'>
        <Box className='sr'>
          <Typography variant="h6">{email.subject}</Typography>
          <Typography className='from'>from : {email.fromEmail}</Typography>
          <Typography className='to'>to: {email.toEmail}</Typography>
        </Box>
        <Typography variant="body2" className="typography-muted">20 June 2022 • 9:16 AM</Typography>
      </Box>

      <Box variant="body2" className="content" style={{ whiteSpace: 'pre-wrap' }}>
        {emailBodyText}
      </Box>
      <Box className="divider-container">
        <Box className="line"></Box>
        <span className="today-text">View all Replies</span>
        <Box className="line"></Box>
      </Box>
      <Popup
        open={open}
        onClose={handleClose}
        modal
        nested
        contentStyle={{ width: '600px', padding: '20px' }}
      >
        <Box className="reply-modal">
          <Box className='reply-head'>
            <Typography variant="h6">Reply</Typography>
            <CloseIcon onClick={handleClose} />
          </Box>
          <Box className='replyfrom'>
            <label>To:</label>
            <input
              className="borderless"
              type="text"
              value={email.fromEmail}
              onChange={(e) => setReplyTo(e.target.value)}
            />
            <div className='line2'></div>
          </Box>
          <Box className='replyfrom'>
            <label>From:</label>
            <input
              className="borderless"
              type="text"
              value={email.toEmail}
              onChange={(e) => setReplyFrom(e.target.value)}
            />
            <div className='line2'></div>
          </Box>
          <Box className='replyfrom'>
            <label>Subject:</label>
            <input
              className="borderless"
              type="text"
              value={email.subject}
              onChange={(e) => setReplySubject(e.target.value)}
            />
            <div className='line2'></div>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Write your reply here..."
            margin="normal"
            value={replyBody}
            onChange={(e) => setReplyBody(e.target.value)}
          />
          <Box className="modal-actions">
            <Button variant="contained" onClick={handleSave} className="button-send">Save</Button>
            <Button variant="contained" onClick={handleVariables} className="button-send">Variables</Button>
           
            <Button variant="contained" onClick={handleSend} className="button-send">Send</Button>
            <IconButton onClick={handleEmoji}  >
                <InsertEmoticonIcon />
              </IconButton>
          </Box>
        </Box>
      </Popup>
      <Button variant="contained" className="button-reply" onClick={handleOpen}>
        <ReplyIcon /> Reply
      </Button>
      <Dialog open={popup} onClose={handleEmojiClose}>
        <DialogContent className="remainder">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </DialogContent>
      </Dialog>

     
      <Popup
        open={showConfirmDelete}
        onClose={() => setShowConfirmDelete(false)}
        modal
        nested
        contentStyle={{ width: '400px', padding: '20px' }}
      >
        <Box className="confirm-delete-modal">
          <Typography variant="h6">Confirm Delete</Typography>
          <Typography variant="body1">Are you sure you want to delete this email?</Typography>
          <Box className="modal-actions">
            <Button variant="contained" onClick={handleConfirmDelete} className="button-confirm">Yes, Delete</Button>
            <Button variant="outlined" onClick={handleCancelDelete} className="button-cancel">Cancel</Button>
          </Box>
        </Box>
      </Popup>
    </Box>
  );
};

export default EmailDetails;
