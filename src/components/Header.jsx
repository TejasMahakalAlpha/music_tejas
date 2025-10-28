import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import Notifications from './Notifications';
import { FaRegUserCircle, FaBell } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Logo from "../assets/Medi.jfif";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  // to see dropdown useing usestate
  const [showUserMenu, setShowUserMenu] = useState(false); 
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const notificationRef = useRef(null);
  // if user click outside the dropdown then dropdown  invisible
  const userMenuRef = useRef(null); 

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.closest('.notification-button')) {
        return;
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  // using use effect if user click outside the icon then close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
     
      if (event.target.closest('.user-profile-button')) {
        return;
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);
  
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [menuOpen]);

  const toggleNotifications = () => {
    setShowUserMenu(false); 
    setShowNotifications(prev => !prev);
  }


  const toggleUserMenu = () => {
    setShowNotifications(false);
    setShowUserMenu(prev => !prev);
  }

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    setMenuOpen(false);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  
  // in mobile view if i click the option then they automatically close
  const handleDropdownItemClick = () => {
    setShowUserMenu(false);
    closeMenu();
  };

  return (
    <>
      <header className="app-header">
        
        <div className="logo">
          <img className='logo-png' src={Logo} alt="logo" />
          <Link to="/">MUSICIA</Link>
        </div>

        <button
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-buttons ${menuOpen ? 'nav-open' : ''}`}>
       
          <div className="user-profile-wrapper" ref={userMenuRef}>
            <button className="nav-button user-profile-button" onClick={toggleUserMenu}>
              <FaRegUserCircle />
            </button>
      
            {showUserMenu && (
              <div className="user-menu-dropdown">
                <Link to="/userprofile" className="dropdown-item" onClick={handleDropdownItemClick}>
                  Profile
                </Link>
               
                <Link to="/logout" className="dropdown-item" onClick={handleDropdownItemClick}>
                  Log out
                </Link>
              </div>
            )}
          </div>
          
          <div className="notification-wrapper" ref={notificationRef}>
            <button className="nav-button notification-button" onClick={toggleNotifications}>
              <FaBell />
              {/* <span className="badge">4</span> */}
            </button>
            {showNotifications && <Notifications />}
          </div>
        </nav>
      </header>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;