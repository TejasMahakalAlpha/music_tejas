import React from 'react';
import './MonthlyRevenueTrend.css';

const ContentPerformanceBar = ({ label, color, percentage, value }) => (
  <div className="content-performance-item">
    <div className="content-performance-details">
      <span className="content-type-indicator" style={{ backgroundColor: color }}></span>
      <span>{label}</span>
      <span className="content-type-value">{value}</span>
    </div>
    <div className="content-progress-bar-container">
      <div 
        className="content-progress-bar-filler" 
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

const MonthlyRevenueTrend = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">MONTHLY REVENUE TREND</h3>
            <span className="header-subtitle">6 Months</span>
          </div>
          <div className="card-body chart-placeholder">
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">TOP COUNTRIES</h3>
            <span className="header-subtitle">By Revenue</span>
          </div>
          <div className="card-body">
            <ul className="country-list">
              <li className="country-item">
                <span className="country-flag">🇮🇳</span>
                <span className="country-name">IN</span>
                <span className="country-revenue">₹ 2,345 K</span>
              </li>
              <li className="country-item">
                <span className="country-flag">🇺🇸</span>
                <span className="country-name">US</span>
                <span className="country-revenue">₹ 1,500 K</span>
              </li>
              <li className="country-item">
                <span className="country-flag">🇯🇵</span>
                <span className="country-name">JP</span>
                <span className="country-revenue">₹ 1,200 K</span>
              </li>
              <li className="country-item">
                <span className="country-flag">🇬🇧</span>
                <span className="country-name">GB</span>
                <span className="country-revenue">₹ 900 K</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">PERFORMANCE INSIGHTS</h3>
          </div>
          <div className="card-body performance-insights-container">
            <div className="insight-box">
              <div className="insight-value">39.28%</div>
              <p className="insight-label">Revenue from India market</p>
            </div>
            <div className="insight-box">
              <div className="insight-value">24.31%</div>
              <p className="insight-label">Revenue from Reels content</p>
            </div>
            <div className="insight-box">
              <div className="insight-value">7.45%</div>
              <p className="insight-label">Top track revenue share</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">CONTENT TYPE PERFORMANCE</h3>
          </div>
          <div className="card-body content-type-performance-list">
            <ContentPerformanceBar label="FB Reels" color="#007bff" percentage={75} value="₹2,800" />
            <ContentPerformanceBar label="IG Reels" color="#dc3545" percentage={60} value="₹2,000" />
            <ContentPerformanceBar label="Cross-post" color="#28a745" percentage={45} value="₹1,200" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MonthlyRevenueTrend;