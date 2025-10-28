import React from 'react';
import './AddArtistDetails.css';
import CreateNewPage from './CreateNewPage';
import { FaCloudUploadAlt } from 'react-icons/fa';

function AddArtistDetails() {
  return (
    <>
      <CreateNewPage />
      <div className="page-with-sidebar-layout">
        <div className="add-artist-container">
          <div className="form-content">
            <div className="left-panel">
              <div className="artwork-uploader">
                <FaCloudUploadAlt className="upload-icon" />
                <p>3000 x 3000 pixel (jpeg/jpg Image only)</p>
                <button type="button" className="btn btn-primary">Upload Artwork</button>
              </div>
              <button type="button" className="btn btn-primary upload-audio-btn">Upload Audio</button>
            </div>
            <div className="right-panel">
              <form className="artist-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="primary-artist" className="required-field">Primary Artist/Singer</label>
                    <button type="button" className="btn-add">Add Artist</button>
                    <select id="primary-artist" name="primary-artist">
                      <option value="">Choose Primary Artists</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="secondary-artist">Secondary Artist/Singer</label>
                    <button type="button" className="btn-add">Add Artist</button>
                    <select id="secondary-artist" name="secondary-artist">
                      <option value="">Choose Artists</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Featuring Artist/Singer</label>
                    <div className="radio-group">
                      <span>Do you have any Featured Artist?</span>
                      <div className="radio-options">
                        <label>
                          <input type="radio" name="featured" value="yes" /> Yes
                        </label>
                        <label>
                          <input type="radio" name="featured" value="no" defaultChecked /> No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="composer" className="required-field">Composer/Music Director</label>
                    <button type="button" className="btn-add">Add Composer</button>
                    <select id="composer" name="composer">
                      <option value="">Choose Composer</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lyricist" className="required-field">Lyricist</label>
                    <button type="button" className="btn-add">Add Lyricist</button>
                    <select id="lyricist" name="lyricist">
                      <option value="">Choose Lyricist</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="producer">Music Producer/Music Arranger/Music Programmer</label>
                    <button type="button" className="btn-add">Add Producer</button>
                    <select id="producer" name="producer">
                      <option value="">Choose Producer</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="form-navigation">
            <button type="button" className="btn btn-secondary">Back</button>
            <button type="button" className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArtistDetails;