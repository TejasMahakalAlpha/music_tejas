import React from 'react';
import { FaUser, FaUniversity, FaFileAlt, FaCog, FaRegUserCircle } from 'react-icons/fa';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-page">
      <div className="profile-container">
        
        <div className="profile-header">
          <div className="profile-header-title">
            <FaUser className="header-icon" />
            <h2>Personal information</h2>
          </div>

          <div className="profile-header-actions">
            
        
            <span className="notification-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M14.25 21v-4.583c0-1.025.267-2.046.741-2.923l5.02-9.151a1.125 1.125 0 011.663 1.144l-3.351 9.77c-.846 2.441-3.045 4.316-5.877 4.819zm-6.25-2.25h10.5M12 21v-9.75m-5.25-4.5H5.625c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.75a1.125 1.125 0 00-1.125-1.125h-4.24l-.179.089m-4.018.068L5.13 6.647a1.125 1.125 0 01-.179-1.59l-.014-.015C4.697 4.098 5.515 3 6.75 3h1.372c.58 0 1.15.196 1.597.564l1.393 1.177c.801.676 1.917 1.059 3.13 1.059H16.5a2.25 2.25 0 012.25 2.25v2.872l.145.064M12 21h-8.25V4.75a.75.75 0 01.75-.75h2.179C6.88 4 6.75 5.5 6.75 5.5l-.015.015A.75.75 0 006.577 6.6l.004-.004L5.5 7.625M12 21a2.25 2.25 0 01-2.25-2.25V4.75" />
              </svg>
              <span className="badge">1</span>
            </span>
            
            
            <div className="header-icon-wrapper">
              <FaRegUserCircle />
            </div>
            
          </div>
        </div>

        <div className="section">
          <div className="section-row">
            <span className="label">Your User ID</span>
            <span className="value">****</span>
            <span className="icon-arrow"></span>
          </div>
          <div className="section-row">
            <span className="label">Name</span>
            <span className="value">Saba, Mahesana, 384001</span>
            <span className="icon-arrow"></span>
          </div>
          <div className="section-row">
            <span className="label">Phone number</span>
            <span className="value">****</span>
            <span className="icon-arrow"></span>
          </div>
        </div>

        <div className="profile-header">
            <div className="profile-header-title">
            <FaUniversity className="header-icon" />
            <h2>My Bank Account</h2>
          </div>
        </div>
        <div className="section">
          <div className="section-row">
            <span className="label">Bank Details</span>
            <span className="value verified">Verified</span>
            <span className="icon-arrow"></span>
          </div>
        </div>

        <div className="profile-header">
          <div className="profile-header-title">
            <FaFileAlt className="header-icon" />
            <h2>My tax Account</h2>
          </div>
        </div>
        <div className="section">
          <div className="section-row">
            <span className="label">PAN No</span>
            <span className="value verified">Verified</span>
            <span className="icon-arrow"></span>
          </div>
          <div className="section-row">
            <span className="label">GST No</span>
            <span className="value">****</span>
            <span className="icon-arrow"></span>
          </div>
        </div>

        <div className="profile-header">
            <div className="profile-header-title">
            <FaCog className="header-icon" />
            <h2>Account settings</h2>
          </div>
        </div>
        <div className="section">
          <div className="section-row">
            <span className="label">Email</span>
            <span className="value">****</span>
            <span className="icon-arrow"></span>
          </div>
          <div className="section-row">
            <span className="label">Change password</span>
            <span className="value">****</span>
            <span className="icon-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;