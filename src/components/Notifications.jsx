import React from 'react';
import './Notifications.css';
import { FaBell } from "react-icons/fa"; 
import { FaRegUserCircle } from "react-icons/fa";

const Avatar = ({ src, name }) => {
 
  if (src) {
    return <img src={src} alt={name} className="notification-avatar" />;
  }
  const getInitials = (nameStr) => {
    if (!nameStr) return '?';
    const words = nameStr.split(' ');
    if (words.length > 1) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return nameStr.substring(0, 2).toUpperCase();
  };
  const generateColor = (nameStr) => {
    let hash = 0;
    for (let i = 0; i < nameStr.length; i++) {
        hash = nameStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 75%, 60%)`;
    return color;
  };
  const initials = getInitials(name);
  const bgColor = generateColor(name);
  return (
    <div className="notification-avatar initials-avatar" style={{ backgroundColor: bgColor }}>
      <span>{initials}</span>
    </div>
  );
};


const Notifications = () => {
  const notifications = [
    { id: 1, name: "Tejas Mahakal", status: "Live", time: "4 days ago", avatar: "https://picsum.photos/id/237/40/40" },
    { id: 2, name: "Tejas", status: "Used", time: "1 week ago", avatar: "https://picsum.photos/id/238/40/40" },
    { id: 3, name: "aadesh tripathi", status: "Live", time: "1 week ago", avatar: "https://picsum.photos/id/239/40/40" },
    { id: 4, name: "aniket munot", status: "Used", time: "2 weeks ago", avatar: "https://picsum.photos/id/239/40/40" },
  ];

  return (
    <div className="notifications-container"> 
      <div className="notifications-header">
        <h2>All Notifications</h2>
      
        <div className="header-icon-wrapper">
            <FaBell />
            <FaRegUserCircle />

        </div>
        
      </div>
      <div className="notifications-list">
        {notifications.map(notification => (
          <div key={notification.id} className="notification-item">
            <Avatar src={notification.avatar} name={notification.name} />
            <div className="notification-content">
              <span className="notification-name">{notification.name}</span>
              <span className={`notification-status ${notification.status.toLowerCase()}`}>
                {notification.status}
              </span>
            </div>
            <span className="notification-time">{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;