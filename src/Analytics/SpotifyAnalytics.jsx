import React from 'react';
import { FaFacebookF, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';
import './SpotifyAnalytics.css';

const SpotifyAnalytics = () => {
  const facebookProducts = [
    { name: 'FB MUSIC STICKER', value: '₹22,50,000' },
    { name: 'FB REELS LFV', value: '₹45,20,000' },
    { name: 'FB UGC', value: '₹22,00,000' },
    { name: 'FB FROM IG CROSSPOST REELS', value: '₹36,00,000' },
    { name: 'FB REELS SFV', value: '₹18,00,000' },
    { name: 'FB FROM IG CROSSPOST', value: '₹2,20,000' },
    { name: 'FB COMPOSER', value: '₹35,894' },
    { name: 'FB REELS', value: '₹1,50,000' },
  ];

  const instagramProducts = [
    { name: 'IG MUSIC STICKER', value: '₹7,20,000' },
    { name: 'IG REELS', value: '₹1,80,000' },
    { name: 'IG UGC', value: '₹70,000' },
    { name: 'IG MUSIC ON FEED', value: '₹7,20,000' },
    { name: 'IG MUSIC NOTES', value: '₹1,70,000' },
    { name: 'IG DIRECT', value: '₹5,50,000' },
    { name: 'IGLITE STORY', value: '₹9,40,000' },
    { name: 'IG FROM FB CROSSPOST STORY', value: '₹3,00,000' },
  ];
  
  const othersProducts = [
      { name: 'IGLITE STORY', value: '₹9,40,000' },
      { name: 'TH FROM IG CROSSPOST REELS', value: '₹2,10,000' },
      { name: 'MSGR NOTES', value: '₹7,50,000' },
      { name: 'FBLITE CAMERA', value: '₹1,70,000' },
      { name: 'THREADS UGC', value: '₹3,50,000' },
      { name: 'MSGR STORIES', value: '₹9,30,000' },
      { name: 'UGC-CONSUMPTION', value: '₹7,30,000' },
      { name: 'UGC-PRODUCTION', value: '₹58,140' },
      { name: 'PROFILE SONG SEE ALL LIST', value: '₹50,000' },
  ];

  const renderList = (items) => (
    <ul className="pp-list">
      {items.map((item, index) => (
        <li key={index} className="pp-list-item">
          <span className="pp-item-name">{item.name}</span>
          <span className="pp-item-value">{item.value}</span>
          <div className="pp-progress-bar-container">
            <div 
              className="pp-progress-bar" 
              style={{width: `${Math.random() * 70 + 30}%`}}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="pp-container">
      <h2 className="pp-title">Product Performance Breakdown</h2>
      <div className="pp-columns-grid">
        <div className="pp-column">
          <h3 className="pp-column-title">
            <div className="pp-icon-container">
              <FaFacebookF className="pp-icon facebook-color" />
            </div>
            <span>FACEBOOK PRODUCTS</span>
          </h3>
          {renderList(facebookProducts)}
        </div>
        <div className="pp-column">
          <h3 className="pp-column-title">
            <div className="pp-icon-container">
              <FaInstagram className="pp-icon instagram-color" />
            </div>
            <span>INSTAGRAM PRODUCTS</span>
          </h3>
          {renderList(instagramProducts)}
        </div>
        <div className="pp-column">
          <h3 className="pp-column-title">
            <div className="pp-icon-container">
                <FaFacebookMessenger className="pp-icon messenger-color" />
            </div>
            <span>MESSENGER & OTHERS</span>
          </h3>
          {renderList(othersProducts)}
        </div>
      </div>
    </div>
  );
};

export default SpotifyAnalytics;