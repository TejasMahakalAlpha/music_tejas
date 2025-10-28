import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import './RemoveYoutubeClaim.css';

const RemoveYoutubeClaim = () => {
  return (
    <div className="claim-form-container">
      <form className="claim-form">
        <div className="form-header">
          <FaYoutube className="youtube-icon" />
          <h1>Remove YouTube Claims</h1>
        </div>

        <p className="note-text">
          Note: For security reasons, bank change requests may take up to 24-48 hours to process.
        </p>

        <div className="form-group">
          <label htmlFor="song-name">Name of the songs *</label>
          <select id="song-name" required>
            <option value="" disabled selected>Name of the songs</option>
            <option value="song1">Song Title One</option>
            <option value="song2">Another Song Here</option>
            <option value="song3">My Awesome Beat</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="paste-links">Paste links from which you want to remove claim *</label>
          <textarea 
            id="paste-links" 
            rows="4" 
            placeholder="You can paste multiple links here"
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="channel-links">Channel Links *</label>
          <input 
            type="text" 
            id="channel-links" 
            required
          />
        </div>

        <div className="info-block">
          <p>Hey there! 👋 To get your claim removed faster (within 24 working hours), just add the links between 9 AM - 5 PM (Mon-Fri).</p>
          <p className="info-bullet">Keep your video Unlisted or Public -- we can't remove claims from Private videos.</p>
          <p>Hope this helps! 🚀</p>
        </div>
        
        <button type="submit" className="submit-btn">Release Claim</button>
      </form>
    </div>
  );
};

export default RemoveYoutubeClaim;