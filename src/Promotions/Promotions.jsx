import React from 'react';
import './Promotions.css';

const MusicNoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="music-note-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);


export default function Promotions() {
  return (
    <div className="page-wrapper">
 
      <div className="top-banner">
        <span>#F919 Annual Limitless Label Credits: unlimited</span>
        <div className="banner-icon"></div>
      </div>


      <div className="promo-card-container">
        <div className="promo-card">
          <div className="promo-header">
            <MusicNoteIcon />
            <h1 className="promo-title">Promote Your Music</h1>
          </div>
          <p className="promo-subtitle">Coming Soon</p>
          <div className="promo-credits-badge">
            <span>Promo Credits Remaining: 0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
