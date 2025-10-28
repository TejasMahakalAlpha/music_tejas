import React, { useState } from 'react';
import './SelectPlatform.css';
import CreateNewPage from './CreateNewPage';

// import Sidebar from '../components/Sidebar';

function SelectPlatform() {
  const [platforms, setPlatforms] = useState({
    indianDSPs: false,
    internationalDSPs: true,
    metaPlatforms: true,
  });

  const [youtubeId, setYoutubeId] = useState('yes');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPlatforms(prevPlatforms => ({
      ...prevPlatforms,
      [name]: checked,
    }));
  };

  return (
    <>
      <CreateNewPage />

      <div className="page-with-sidebar-layout">
        
        {/* <Sidebar /> */}

        <div className="select-platform-main-content">
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
              <h2>Select Platforms</h2>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="indianDSPs"
                    checked={platforms.indianDSPs}
                    onChange={handleCheckboxChange}
                  />
                  <span className="custom-checkbox"></span>
                  Indian DSP's
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="internationalDSPs"
                    checked={platforms.internationalDSPs}
                    onChange={handleCheckboxChange}
                  />
                  <span className="custom-checkbox"></span>
                  International DSP's
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="metaPlatforms"
                    checked={platforms.metaPlatforms}
                    onChange={handleCheckboxChange}
                  />
                  <span className="custom-checkbox"></span>
                  META Platforms (Facebook, Instagram)
                </label>
              </div>

              <div className="form-group">
                <label className="form-label">Do you wish to deliver the song on Youtube Content ID?*</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="youtubeId"
                      value="yes"
                      checked={youtubeId === 'yes'}
                      onChange={() => setYoutubeId('yes')}
                    />
                    <span className="custom-radio"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="youtubeId"
                      value="no"
                      checked={youtubeId === 'no'}
                      onChange={() => setYoutubeId('no')}
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

export default SelectPlatform;