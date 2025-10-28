import React, { useState } from 'react';
import './Guidlines.css';
import CreateNewPage from './CreateNewPage';


// import Sidebar from "../components/Sidebar";

function Guidlines() {
  const [activeTab, setActiveTab] = useState('audio');

  return (
    
    <>
      <CreateNewPage />

      
      <div className="page-with-sidebar-layout">
        
        {/* <Sidebar />  */}

        <div className="guidelines-main-content">
          
          <div className="content-wrapper">
            
            <div className="upload-panel">
              <div className="artwork-uploader">
                <div className="upload-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#a0a0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <p>3000 x 3000 pixel jpeg/jpg image only</p>
                <button className="upload-artwork-btn">Upload Artwork</button>
              </div>
              <button className="upload-audio-btn">Upload Audio</button>
            </div>

            
            <div className="guidelines-panel">
              <h2>Guidelines</h2>
              <div className="tabs">
                <button
                  className={`tab-btn ${activeTab === 'audio' ? 'active' : ''}`}
                  onClick={() => setActiveTab('audio')}
                >
                  Audio
                </button>
                <button
                  className={`tab-btn ${activeTab === 'artwork' ? 'active' : ''}`}
                  onClick={() => setActiveTab('artwork')}
                >
                  Artwork
                </button>
              </div>
              <div className="guidelines-content">
                {activeTab === 'audio' ? (
                  <ul>
                    <li>The maximum accepted file size for audio uploads is 300MB.</li>
                    <li>The minimum accepted audio duration is 1 minute.</li>
                  </ul>
                ) : (
                  <ul>
                    <li>Artwork must be a 3000x3000 pixel JPG or JPEG file.</li>
                    <li>Do not include social media handles or URLs.</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          
          <div className="footer-nav">
            <button className="next-btn">Next</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Guidlines;