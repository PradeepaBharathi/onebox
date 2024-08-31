import React from 'react';
import { FaHome, FaUser, FaEnvelope, FaPaperPlane, FaChartBar, FaInbox } from 'react-icons/fa';
import './Sidebar.css';
import maillogo from '../../Assets/maillogo.png'
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Sidebar = () => {
  const nav = useNavigate()
  const handleLogout =() =>{
    localStorage.removeItem("authtoken")
    nav("/")
  }
  return (
    <div className="sidebar">
      <div className="logo"><img src={maillogo}/></div>
      <nav>
        <ul>
          <li onClick={()=>nav("google-login")}><FaHome /></li>
          <li><FaUser onClick={()=>nav("addmail")}/></li>
          <li><FaEnvelope  onClick={()=>nav("main")}/></li>
          <li><FaPaperPlane onClick={()=>nav("campaign")}/></li>
      
          <li onClick={()=>nav("charts")}><FaChartBar /></li>
        </ul>
      </nav>
      <Popup trigger={<div className='user-icon'> U</div>} position="right center">
    <button className='logout-btn' onClick={handleLogout}>Logout</button>
  </Popup>
     
    </div>
  );
};

export default Sidebar;
