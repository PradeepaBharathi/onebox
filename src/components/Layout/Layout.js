import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './Layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
         <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
