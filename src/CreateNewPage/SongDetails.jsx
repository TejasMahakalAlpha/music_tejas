import React, { useState } from 'react';
import './SongDetails.css';

import CreateNewPage from './CreateNewPage';
// import Sidebar from '../components/Sidebar';

function SongDetails() {
  const [hasFeaturedArtist, setHasFeaturedArtist] = useState('yes');

  return (
    <>
      <CreateNewPage />

      <div className="page-with-sidebar-layout">
        {/* <Sidebar /> */}

        <div className="songdetails-main-content">
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
              <div className="artist-form-grid">

                <div className="form-group">
                  <div className="label-group">
                    <label className="form-label">Primary Artist/Singer</label>
                    <button className="add-btn">Add Artist</button>
                  </div>
                  <p className="required-text">* This field is required.</p>
                  <select className="custom-select">
                    <option>Choose Primary Artists</option>
                  </select>
                </div>

                <div className="form-group">
                  <div className="label-group">
                    <label className="form-label">Secondary Artist/Singer</label>
                    <button className="add-btn">Add Artist</button>
                  </div>
                  <select className="custom-select">
                    <option>Choose Artists</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Featuring Artist/Singer</label>
                  <div className="radio-group featured-artist-group">
                    <label className="form-label-light">Do you have any Featured Artist?</label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="featured"
                        value="yes"
                        checked={hasFeaturedArtist === 'yes'}
                        onChange={() => setHasFeaturedArtist('yes')}
                      />
                      <span className="custom-radio"></span> Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="featured"
                        value="no"
                        checked={hasFeaturedArtist === 'no'}
                        onChange={() => setHasFeaturedArtist('no')}
                      />
                      <span className="custom-radio"></span> No
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="label-group">
                    <label className="form-label">Composer/Music Director</label>
                    <button className="add-btn">Add Composer</button>
                  </div>
                  <p className="required-text">* This field is required.</p>
                  <select className="custom-select">
                    <option>Choose Composer</option>
                  </select>
                </div>

                <div className="form-group">
                  <div className="label-group">
                    <label className="form-label">Lyricist</label>
                    <button className="add-btn">Add Lyricist</button>
                  </div>
                  <p className="required-text">* This field is required.</p>
                  <select className="custom-select">
                    <option>Choose Lyricist</option>
                  </select>
                </div>

                <div className="form-group">
                  <div className="label-group">
                    <label className="form-label">Music Producer / Arranger / Programmer</label>
                    <button className="add-btn">Add Producer</button>
                  </div>
                  <select className="custom-select">
                    <option>Choose Producer</option>
                  </select>
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

export default SongDetails;