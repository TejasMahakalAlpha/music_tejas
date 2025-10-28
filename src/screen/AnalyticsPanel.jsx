import React from "react";
import "./AnalyticsPanel.css";

const platformData = [
  {
    id: 1,
    name: "YouTube Content ID (U.G.C)",
    value: "₹ 1.1 L",
    percentage: "41.22%",
    icon: (
      <svg viewBox="0 0 28 20" fill="none" className="analytics-panel-platform-icon">
        <path d="M27.5 5.5s-.2-1.9-.4-2.8c-.3-1-.9-1.6-1.9-1.8C23.6.4 14 .4 14 .4s-9.6 0-11.2.5c-1 .2-1.6.8-1.9 1.8-.2.9-.4 2.8-.4 2.8s-.2 2.2-.2 4.4v1.2s.2 2.2.4 3.1c.3 1 .9 1.6 1.9 1.8 1.6.5 11.2.5 11.2.5s9.6 0 11.2-.5c1-.2 1.6-.8 1.9-1.8.2-.9.4-3.1.4-3.1s.2-2.2.2-4.4v-1.2s-.2-2.2-.2-4.4zM11.2 13.1V6.9l6 3.1-6 3.1z" fill="#FF0000"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Spotify",
    value: "₹ 55.44 K",
    percentage: "20.87%",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="analytics-panel-platform-icon">
        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM14.63 14.48c-.19.3-.57.4-.86.21-2.39-1.46-5.35-1.8-8.8-.99-.33.08-.66-.14-.74-.46s.14-.66.46-.74c3.73-.88 7- .5 9.68 1.1.29.18.39.56.21.85v.03zm.8-2.67c-.23.36-.7.47-1.06.24-2.67-1.64-6.75-2.12-9.92-1.16-.42.13-.86-.1-.98-.52s.1-.86.52-.98c3.56-1.07 8.04-.54 11.08 1.28.36.22.47.7.24 1.06v.06zm.1-2.89C12.04 7.2 6.55 7.02 3.8 7.8c-.5.15-1.01-.13-1.16-.64s.13-1.01.64-1.16c3.2- .96 9.24-.75 12.87 1.15.44.23.6.8.37 1.24-.23.44-.8.6-1.24.37z" fill="#1DB954"/>
      </svg>
    ),
  },
  {
    id: 3,
    name: "META (Facebook, Instagram, WhatsApp)",
    value: "₹ 27.73 K",
    percentage: "10.43%",
    icon: (
       <svg viewBox="0 0 20 20" fill="none" className="analytics-panel-platform-icon">
        <path d="M10 0C4.477 0 0 4.477 0 10c0 4.33 2.78 8.01 6.5 9.44V12.2H4.55V9.45h1.95V7.3c0-1.93 1.16-3 2.92-3 1.39 0 2.58.1 2.93.15v2.47h-1.46c-.94 0-1.12.44-1.12 1.1v1.43h2.75l-.36 2.75H9.77v7.24C17.22 18.01 20 14.33 20 10 20 4.477 15.523 0 10 0z" fill="#1877F2"/>
      </svg>
    ),
  },
 
];

const uploadTrendData = [
  { month: "Apr-2025", value: 80 },
  { month: "May-2025", value: 50 },
  { month: "Jun-2025", value: 65 },
  { month: "Jul-2025", value: 30 },
  { month: "Aug-2025", value: 70 },
  { month: "Sep-2025", value: 45 },
];

const AnalyticsPanel = () => {
  return (
    <div className="analytics-panel-page-container">
      <main className="analytics-panel-main-content">
        <div className="analytics-panel-grid">
          <div className="analytics-panel-card">
            <h2 className="analytics-panel-card-title">Top Platforms</h2>
            <ul className="analytics-panel-list">
              {platformData.map((platform) => (
                <li key={platform.id} className="analytics-panel-list-item">
                  <div className="analytics-panel-platform-icon-container">{platform.icon}</div>
                  <div className="analytics-panel-platform-info">
                    <span className="analytics-panel-platform-name">{platform.name}</span>
                    <span className="analytics-panel-platform-value">{platform.value}</span>
                  </div>
                  <div className="analytics-panel-platform-percentage" style={{ '--percentage-width': platform.percentage }}>
                    <span>{platform.percentage}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="analytics-panel-card">
            <h2 className="analytics-panel-card-title">Upload Trend</h2>
            <div className="analytics-panel-upload-header">
              <div className="analytics-panel-upload-stats">
                <p className="analytics-panel-upload-count">9</p>
                <p className="analytics-panel-upload-subtext">Songs this month</p>
              </div>
              <span className="analytics-panel-trend-increase">+17.86% from last month</span>
            </div>
            <div className="analytics-panel-chart-container">
              {uploadTrendData.map((data) => (
                <div key={data.month} className="analytics-panel-bar-wrapper">
                  <div className="analytics-panel-bar" style={{ height: `${data.value}%` }}></div>
                  <span className="analytics-panel-month-label">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPanel;