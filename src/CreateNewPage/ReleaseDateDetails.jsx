import React, { useState } from 'react';
import './ReleaseDateDetails.css';
import CreateNewPage from './CreateNewPage';


// import Sidebar from '../components/Sidebar';

function ReleaseDateDetails() {
  const [releasedPreviously, setReleasedPreviously] = useState('no');

  return (
    <>
      <CreateNewPage />

      
      <div className="page-with-sidebar-layout">
        
      
        {/* <Sidebar /> */}

       
        <div className="release-details-main-content">
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

           
            <div className="form-panel">
              <div className="info-box">
                <p>If your song has already been released in the past, please fill in both the Past Release Date and the Go Live Date. If not just enter the Go Live Date</p>
              </div>
              <div className="form-group">
                <label className="form-label">Has this song been released previously?*</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="released"
                      value="yes"
                      checked={releasedPreviously === 'yes'}
                      onChange={() => setReleasedPreviously('yes')}
                    />
                    <span className="custom-radio"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="released"
                      value="no"
                      checked={releasedPreviously === 'no'}
                      onChange={() => setReleasedPreviously('no')}
                    />
                    <span className="custom-radio"></span>
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

       
          <div className="footer-nav">
            <button className="back-btn">Back</button>
            <button className="next-btn">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReleaseDateDetails;