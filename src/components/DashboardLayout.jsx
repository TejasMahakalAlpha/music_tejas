

import React from 'react';

import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';

import Header from "./Header";
import Sidebar from './Sidebar'; 

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(window.innerWidth > 992);

  return (
    <div className="app-layout">
      <Header />
      
      <div className="dashboard-body">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;