import React from 'react';
import './Navbar.css';
import { useThemeContext } from '../Theme/Theme';

const Navbar = () => {
  const { darktheme, toggleTheme } = useThemeContext();
  return (
    <div className="navbar">
      <div className="navbar-title">Onebox</div>
      <div className="navbar-actions">
        <label className="switch">
          <input type="checkbox" checked={darktheme === 'dark'} 
            onChange={toggleTheme} />
          <span className="slider">  </span>
        </label>
        <div className="workspace-dropdown">Workspace</div>
      </div>
    </div>
  );
};

export default Navbar;
