import React from 'react';
import './HelpAndSupport.css'; 
 

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="youtube-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
 

export default function App() {
  return (
    <div className="page-container">
      <div className="top-banner">
        <span>#919 Annual Limitless Label Credits: unlimited</span>
        <div className="banner-icon"></div>
      </div>
 
      <div className="main-card">
        <div className="card-header">
          <YouTubeIcon />
          <div>
            <h1 className="card-title">Remove YouTube Claims</h1>
            <p className="card-subtitle">
              Note: For security reasons, bank change requests may take up to 24-48 hours to process.
            </p>
          </div>
        </div>
 
        <form className="claim-form">
          <div className="form-group">
            <label htmlFor="songs" className="form-label">Name of the songs <span className="required-star">*</span></label>
            <div className="select-wrapper">
              <select id="songs" name="songs" defaultValue="" className="form-select">
                <option value="" disabled>Name of the songs</option>
                <option value="song1">Song 1</option>
                <option value="song2">Song 2</option>
                <option value="song3">Song 3</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="links" className="form-label">Paste links from which you want to remove claim <span className="required-star">*</span></label>
            <textarea id="links" name="links" rows="3" className="form-textarea" placeholder="You can paste multiple links here"></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="channel-links" className="form-label">Channel Links <span className="required-star">*</span></label>
            <input type="text" id="channel-links" name="channel-links" className="form-input" placeholder="Channel Links" />
          </div>
 
          <div className="info-text">
            <p>Hey there! 😊 To get your claim removed faster (within 24 working hours), just add the links between 9 AM - 5 PM (Mon-Fri).</p>
            <p>Keep your video Unlisted or Public - we can't remove claims from Private videos.</p>
            <p>Hope this helps! 🚀</p>
          </div>
 
          <div className="form-group">
            <button type="submit" className="submit-button">Release Claim</button>
          </div>
        </form>
      </div>
    </div>
  );
}

 