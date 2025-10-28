import React, { useState } from 'react';
import Dashboard from '../screen/Dashboard';
import './Home.css';
import ReleasesPanel from '../screen/ReleasesPanel';
import PramotionsPanel from '../screen/PramotionsPanel';
import AnalyticsPanel from '../screen/AnalyticsPanel';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='home-layout'>
        <div className='main-content'>
          <Dashboard />
          <ReleasesPanel/>
          <PramotionsPanel/>
<AnalyticsPanel/>
          
        </div>
        
      </div>
      
          
          
    </>
  );
}

export default Home;
