import React from 'react';
import './ExportData.css'; 

const ExportData = ({ isOpen, onClose }) => {

  if (!isOpen) {
    return null;
  }

  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => currentYear - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Export Data by Month & Year</h2>
          <button className="modal-close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="month">Select Month(s)</label>
            <select id="month" name="month">
              <option value="">Select Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="year">Select Year(s)</label>
            <select id="year" name="year">
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button className="export-modal-btn">Export</button>
        </div>
      </div>
    </div>
  );
};

export default ExportData;